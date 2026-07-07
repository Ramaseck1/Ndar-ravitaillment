import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config(); // Toujours appeler ça au début

export class AuthUtils {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

   static generateTokenclient(payload: { id: string; telephone: string;role: string }): string {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    return (jwt as any).sign(payload, secret, { expiresIn });
  }
  static generateToken(payload: { id: string; email:string; role: string }): string {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    return (jwt as any).sign(payload, secret, { expiresIn });
  }

  static verifyToken(token: string): any {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    return jwt.verify(token, secret);
  }

  static extractTokenFromHeader(authHeader: string | undefined): string | null {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.substring(7);
  }

  static generateOrderNumber(): string {
    return `CMD-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  }

  static generatePaymentReference(): string {
    return `PAY-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  }
}
