// prisma/seed.ts
import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({
    where: { email: process.env.SUPERADMIN_EMAIL! }
  });

  if (existing) {
    console.log("Le super admin existe déjà.");
    return;
  }

  const hashedPassword = await bcrypt.hash(process.env.SUPERADMIN_PASSWORD!, 10);

  const superAdmin = await prisma.user.create({
    data: {
      nom: "Admin",
      prenom: "Super",
      email: process.env.SUPERADMIN_EMAIL!,
      password: hashedPassword,
      role: Role.SUPERADMIN
    }
  });

  console.log("✅ Super admin créé :", superAdmin.email);
}

main()
  .catch((e) => {
    console.error("❌ Erreur lors du seed :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });