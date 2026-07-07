import * as dotenv from "dotenv";
dotenv.config();

import * as jwt from "jsonwebtoken";

const payload = { id: 1, role: "admin" };
const secret = process.env.JWT_SECRET;

console.log("Clé secrète chargée :", secret);

if (!secret) {
  throw new Error("❌ JWT_SECRET est undefined !");
}

const token = jwt.sign(payload, secret, {
  expiresIn: "1d",
});

console.log("✅ Token généré :", token);
