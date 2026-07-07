interface ResetEntry {
    code: string;
    gieId: string;
    email: string;
    expiresAt: number;
    verified: boolean;
}
export declare const ResetCodeStore: {
    create(gieId: string, email: string): string;
    verify(email: string, code: string): ResetEntry | null;
    canReset(email: string): ResetEntry | null;
    delete(email: string): void;
};
export {};
//# sourceMappingURL=resetCodeStore.d.ts.map