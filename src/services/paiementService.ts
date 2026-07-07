import { prisma } from "../prisma";

interface EnregistrerPaiementDto {
  commandeId: number;
  montant: number;
  methode?: string;
  note?: string;
}

class PaiementService {
  async enregistrerPaiement(data: EnregistrerPaiementDto) {
    const { commandeId, montant, methode, note } = data;

    if (montant <= 0) {
      throw new Error("Le montant du paiement doit être positif");
    }

    const commande = await prisma.commande.findUnique({ where: { id: commandeId } });
    if (!commande) throw new Error("Commande introuvable");

    const montantRestantAvant = commande.total - commande.montantPaye;

    if (montant > montantRestantAvant) {
      throw new Error(
        `Montant trop élevé : il ne reste que ${montantRestantAvant} FCFA à payer sur cette commande`
      );
    }

    const nouveauMontantPaye = commande.montantPaye + montant;
    const nouveauStatut = this.calculerStatut(nouveauMontantPaye, commande.total);

    await prisma.paiement.create({
      data: { commandeId, montant, methode, note },
    });

    return prisma.commande.update({
      where: { id: commandeId },
      data: {
        montantPaye: nouveauMontantPaye,
        statutPaiement: nouveauStatut,
      },
      include: {
        client: true,
        paiements: { orderBy: { createdAt: "desc" } },
      },
    });
  }

  private calculerStatut(montantPaye: number, total: number): "NON_PAYEE" | "PARTIELLEMENT_PAYEE" | "PAYEE" {
    if (montantPaye <= 0) return "NON_PAYEE";
    if (montantPaye >= total) return "PAYEE";
    return "PARTIELLEMENT_PAYEE";
  }

  async getDette(commandeId: number) {
    const commande = await prisma.commande.findUnique({
      where: { id: commandeId },
      include: { client: true, paiements: { orderBy: { createdAt: "desc" } } },
    });
    if (!commande) throw new Error("Commande introuvable");

    return {
      commandeId: commande.id,
      client: commande.client,
      total: commande.total,
      montantPaye: commande.montantPaye,
      montantRestant: commande.total - commande.montantPaye,
      statutPaiement: commande.statutPaiement,
      paiements: commande.paiements,
    };
  }

  /** Toutes les dettes (commandes non totalement payées) d'un client par téléphone */
  async getDettesClient(telephone: string) {
    const commandes = await prisma.commande.findMany({
      where: {
        client: { telephone },
        statutPaiement: { in: ["NON_PAYEE", "PARTIELLEMENT_PAYEE"] },
      },
      include: { client: true, paiements: true },
      orderBy: { createdAt: "desc" },
    });

    const montantTotalDu = commandes.reduce(
      (sum, c) => sum + (c.total - c.montantPaye),
      0
    );

    return {
      telephone,
      nombreCommandesImpayees: commandes.length,
      montantTotalDu,
      commandes: commandes.map((c) => ({
        commandeId: c.id,
        total: c.total,
        montantPaye: c.montantPaye,
        montantRestant: c.total - c.montantPaye,
        statutPaiement: c.statutPaiement,
        createdAt: c.createdAt,
      })),
    };
  }

  /** Liste globale de toutes les commandes ayant une dette (vue admin) */
  async getToutesLesDettes() {
    const commandes = await prisma.commande.findMany({
      where: { statutPaiement: { in: ["NON_PAYEE", "PARTIELLEMENT_PAYEE"] } },
      include: { client: true },
      orderBy: { createdAt: "desc" },
    });

    return commandes.map((c) => ({
      commandeId: c.id,
      client: c.client,
      total: c.total,
      montantPaye: c.montantPaye,
      montantRestant: c.total - c.montantPaye,
      statutPaiement: c.statutPaiement,
      createdAt: c.createdAt,
    }));
  }
}

export default new PaiementService();