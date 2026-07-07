import { prisma } from "../prisma";
import whatsappService from "./whatsappService";

interface CommandeItemInput {
  produitId?: number;
  kitId?: number;
  quantite: number;
}



class CommandeService {
 async create(data: any) {
    const { nom, prenom, telephone, items } = data;

    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error("La commande doit contenir au moins un article (produit ou kit)");
    }

      if (!telephone || !/^\+221[7][0-9]{8}$/.test(telephone)) {
    throw new Error(
      "Le numéro de téléphone doit être au format sénégalais +221XXXXXXXXX (ex: +221771234567)"
    );
  }
    // Validation stricte de chaque item AVANT toute écriture en base
    for (const [index, item] of items.entries()) {
      const hasProduit = item.produitId !== undefined && item.produitId !== null;
      const hasKit = item.kitId !== undefined && item.kitId !== null;

      if (!hasProduit && !hasKit) {
        throw new Error(
          `Article #${index + 1} invalide : il doit contenir soit "produitId" soit "kitId"`
        );
      }
      if (hasProduit && hasKit) {
        throw new Error(
          `Article #${index + 1} invalide : "produitId" et "kitId" sont exclusifs, choisissez l'un ou l'autre`
        );
      }
      if (!item.quantite || item.quantite < 1) {
        throw new Error(`Article #${index + 1} invalide : "quantite" doit être au moins 1`);
      }
    }

    const client = await prisma.client.create({
      data: { nom, prenom, telephone },
    });

    let total = 0;
    const details = [];

    for (const item of items as CommandeItemInput[]) {
      if (item.produitId) {
        const produit = await prisma.produit.findUnique({
          where: { id: item.produitId },
        });
        if (!produit) throw new Error(`Produit introuvable : ${item.produitId}`);
        if (produit.quantite < item.quantite) {
          throw new Error(
            `Stock insuffisant pour "${produit.nom}" (disponible : ${produit.quantite})`
          );
        }

        await prisma.produit.update({
          where: { id: produit.id },
          data: { quantite: { decrement: item.quantite } },
        });

        total += produit.prix * item.quantite;
        details.push({
          produitId: produit.id,
          quantite: item.quantite,
          prix: produit.prix,
        });
      }

      if (item.kitId) {
        const kit = await prisma.kitProduit.findUnique({
          where: { id: item.kitId },
        });
        if (!kit) throw new Error(`Kit introuvable : ${item.kitId}`);
        if (kit.quantite < item.quantite) {
          throw new Error(
            `Stock insuffisant pour le kit "${kit.nom}" (disponible : ${kit.quantite})`
          );
        }

        await prisma.kitProduit.update({
          where: { id: kit.id },
          data: { quantite: { decrement: item.quantite } },
        });

        total += kit.prix * item.quantite;
        details.push({
          kitId: kit.id,
          quantite: item.quantite,
          prix: kit.prix,
        });
      }
    }

    const commandeCreee = await prisma.commande.create({
      data: {
        clientId: client.id,
        total,
        details: { create: details },
      },
      include: {
        client: true,
        details: {
          include: {
            produit: true,
            kit: { include: { details: true } },
          },
        },
      },
    });

    // Notification WhatsApp — best effort, ne bloque pas la réponse et ne fait pas échouer la commande
    const message = `Bonjour ${client.prenom}, votre commande #${commandeCreee.id} a bien été reçue ✅\nVous serez contacté(e) dans 1 minute pour organiser la livraison.\nMerci de votre confiance !`;

    whatsappService.sendMessage(client.telephone, message).catch((err) => {
      console.error(`Échec envoi WhatsApp pour la commande #${commandeCreee.id}`, err);
    });

    return commandeCreee;
  }

  async livrer(id: number) {
    return prisma.commande.update({
      where: { id },
      data: { status: "LIVREE" },
    });
  }

  async findAll() {
    return prisma.commande.findMany({
      include: {
        client: true,
        details: {
          include: {
            produit: true,
kit: { include: { details: true } },
          },
        },
      },
    });
  }

  async findById(id: number) {
    const commande = await prisma.commande.findUnique({
      where: { id },
      include: {
        client: true,
        details: {
          include: {
            produit: true,
kit: { include: { details: true } },
          },
        },
      },
    });
    if (!commande) throw new Error("Commande introuvable");
    return commande;
  }

  async findByTelephone(telephone: string) {
    return prisma.commande.findMany({
      where: { client: { telephone } },
      include: {
        client: true,
        details: {
          include: {
            produit: true,
kit: { include: { details: true } },
          },
        },
      },
    });
  }
}

export default new CommandeService();