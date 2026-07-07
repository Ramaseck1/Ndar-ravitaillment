-- CreateEnum
CREATE TYPE "StatutPaiement" AS ENUM ('NON_PAYEE', 'PARTIELLEMENT_PAYEE', 'PAYEE');

-- AlterTable
ALTER TABLE "Commande" ADD COLUMN     "montantPaye" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "statutPaiement" "StatutPaiement" NOT NULL DEFAULT 'NON_PAYEE';

-- CreateTable
CREATE TABLE "Paiement" (
    "id" SERIAL NOT NULL,
    "commandeId" INTEGER NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "methode" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
