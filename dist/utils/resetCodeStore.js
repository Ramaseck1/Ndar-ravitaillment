"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetCodeStore = void 0;
const store = new Map();
const CODE_TTL_MS = 10 * 60 * 1000;
exports.ResetCodeStore = {
    create(gieId, email) {
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
    verify(email, code) {
        const entry = store.get(email.toLowerCase());
        if (!entry)
            return null;
        if (Date.now() > entry.expiresAt) {
            store.delete(email.toLowerCase());
            return null;
        }
        if (entry.code !== code)
            return null;
        entry.verified = true;
        store.set(email.toLowerCase(), entry);
        return entry;
    },
    canReset(email) {
        const entry = store.get(email.toLowerCase());
        if (!entry || !entry.verified || Date.now() > entry.expiresAt)
            return null;
        return entry;
    },
    delete(email) {
        store.delete(email.toLowerCase());
    },
};
//# sourceMappingURL=resetCodeStore.js.map