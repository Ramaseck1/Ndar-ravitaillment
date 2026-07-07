import PDFDocument from "pdfkit";
import { prisma } from "../prisma";
import type { Response } from "express";

class FactureService {
  /**
   * type = "facture"   → document officiel après paiement (total payé)
   * type = "proforma"  → document de demande, indique ce qui reste à payer
   */
  async genererPDF(commandeId: number, type: "facture" | "proforma", res: Response) {
    const commande = await prisma.commande.findUnique({
      where: { id: commandeId },
      include: {
        client: true,
        details: {
          include: {
            produit: true,
            kit: true,
          },
        },
        paiements: { orderBy: { createdAt: "asc" } },
      },
    });

    if (!commande) throw new Error("Commande introuvable");

    const montantRestant = commande.total - commande.montantPaye;
    const doc = new PDFDocument({ margin: 50 });

    const filename = type === "facture"
      ? `facture-${commande.id}.pdf`
      : `bon-a-payer-${commande.id}.pdf`;

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    doc.pipe(res);

    // ── En-tête ──
    doc
      .fontSize(20)
      .fillColor("#1a5c38")
      .text("N_Ravitaillement", { align: "left" })
      .fontSize(10)
      .fillColor("#555")
      .text("Kits alimentaires & hygiène — Dakar, Sénégal")
      .moveDown(1.5);

    doc
      .fontSize(16)
      .fillColor("#111")
      .text(type === "facture" ? "FACTURE" : "BON À PAYER (PROFORMA)", { align: "right" })
      .fontSize(10)
      .fillColor("#555")
      .text(`N° Commande : ${commande.id}`, { align: "right" })
      .text(`Date : ${commande.createdAt.toLocaleDateString("fr-FR")}`, { align: "right" })
      .moveDown(1);

    // ── Infos client ──
    doc
      .fontSize(11)
      .fillColor("#111")
      .text(`Client : ${commande.client.nom} ${commande.client.prenom}`)
      .text(`Téléphone : ${commande.client.telephone}`)
      .moveDown(1);

    // ── Tableau des articles ──
    doc.fontSize(11).fillColor("#111").text("Détail de la commande", { underline: true });
    doc.moveDown(0.5);

    const startX = 50;
    let y = doc.y;
    doc.fontSize(9).fillColor("#555");
    doc.text("Article", startX, y);
    doc.text("Qté", startX + 280, y);
    doc.text("Prix unit.", startX + 340, y);
    doc.text("Sous-total", startX + 430, y);
    y += 15;
    doc.moveTo(startX, y).lineTo(550, y).strokeColor("#ccc").stroke();
    y += 8;

    doc.fontSize(10).fillColor("#111");
    for (const item of commande.details) {
      const nom = item.produit?.nom ?? item.kit?.nom ?? "Article";
      const sousTotal = item.prix * item.quantite;

      doc.text(nom, startX, y, { width: 260 });
      doc.text(String(item.quantite), startX + 280, y);
      doc.text(`${item.prix.toLocaleString("fr-FR")}`, startX + 340, y);
      doc.text(`${sousTotal.toLocaleString("fr-FR")}`, startX + 430, y);
      y += 20;
    }

    y += 10;
    doc.moveTo(startX, y).lineTo(550, y).strokeColor("#ccc").stroke();
    y += 15;

    // ── Totaux ──
    doc.fontSize(11).fillColor("#111");
    doc.text(`Total commande :`, startX + 280, y);
    doc.text(`${commande.total.toLocaleString("fr-FR")} FCFA`, startX + 430, y);
    y += 18;

    doc.fillColor("#1a5c38");
    doc.text(`Montant payé :`, startX + 280, y);
    doc.text(`${commande.montantPaye.toLocaleString("fr-FR")} FCFA`, startX + 430, y);
    y += 18;

    doc.fillColor(montantRestant > 0 ? "#c0392b" : "#1a5c38");
    doc.font("Helvetica-Bold");
    doc.text(`Montant restant :`, startX + 280, y);
    doc.text(`${montantRestant.toLocaleString("fr-FR")} FCFA`, startX + 430, y);
    doc.font("Helvetica");
    y += 30;

    // ── Statut ──
    doc.fontSize(10).fillColor("#555");
    const statutLabel = {
      NON_PAYEE: "Non payée",
      PARTIELLEMENT_PAYEE: "Partiellement payée",
      PAYEE: "Payée intégralement",
    }[commande.statutPaiement];
    doc.text(`Statut : ${statutLabel}`, startX, y);
    y += 25;

    // ── Historique des paiements ──
    if (commande.paiements.length > 0) {
      doc.fontSize(11).fillColor("#111").text("Historique des paiements", startX, y, { underline: true });
      y += 20;
      for (const p of commande.paiements) {
        doc.fontSize(9).fillColor("#555").text(
          `${p.createdAt.toLocaleDateString("fr-FR")} — ${p.montant.toLocaleString("fr-FR")} FCFA${p.methode ? ` (${p.methode})` : ""}`,
          startX,
          y
        );
        y += 14;
      }
    }

    // ── Message final ──
    doc.moveDown(2);
    if (type === "proforma" && montantRestant > 0) {
      doc
        .fontSize(10)
        .fillColor("#c0392b")
        .text(
          `Merci de régler le montant restant de ${montantRestant.toLocaleString("fr-FR")} FCFA dans les meilleurs délais.`,
          { align: "center" }
        );
    } else if (type === "facture") {
      doc
        .fontSize(10)
        .fillColor("#1a5c38")
        .text("Merci pour votre confiance !", { align: "center" });
    }

    doc.end();
  }
}

export default new FactureService();