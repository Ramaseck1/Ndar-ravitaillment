interface ResetEntry {
  code: string;
  gieId: string;
  email: string;
  expiresAt: number;
  verified: boolean; // true après vérification du code → autorise le reset
}

// Map en mémoire : email → entrée
const store = new Map<string, ResetEntry>();

const CODE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export const ResetCodeStore = {
  /** Génère et stocke un code à 6 chiffres */
  create(gieId: string, email: string): string {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    store.set(email.toLowerCase(), {
      code,
      gieId,
      email: email.toLowerCase(),
      expiresAt: Date.now() + CODE_TTL_MS,
      verified: false,
    });
    return code;
  },

  /** Vérifie le code. Retourne l'entrée si valide, null sinon */
  verify(email: string, code: string): ResetEntry | null {
    const entry = store.get(email.toLowerCase());
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      store.delete(email.toLowerCase());
      return null;
    }
    if (entry.code !== code) return null;

    // Marquer comme vérifié (autorise l'étape reset)
    entry.verified = true;
    store.set(email.toLowerCase(), entry);
    return entry;
  },

  /** Vérifie qu'un token de reset est autorisé avant d'appliquer le nouveau mdp */
  canReset(email: string): ResetEntry | null {
    const entry = store.get(email.toLowerCase());
    if (!entry || !entry.verified || Date.now() > entry.expiresAt) return null;
    return entry;
  },

  /** Supprime l'entrée après utilisation */
  delete(email: string): void {
    store.delete(email.toLowerCase());
  },
};