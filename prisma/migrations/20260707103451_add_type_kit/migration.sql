-- CreateEnum
CREATE TYPE "TypeKit" AS ENUM ('COMPLET', 'DEMI', 'QUART');

-- AlterTable
ALTER TABLE "KitProduit" ADD COLUMN     "type" "TypeKit" NOT NULL DEFAULT 'COMPLET';
