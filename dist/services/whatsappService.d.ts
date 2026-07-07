declare class WhatsappService {
    private sock;
    private isReady;
    private latestQr;
    private authFolder;
    constructor();
    private connect;
    getQrCode(): string | null;
    getStatus(): {
        connected: boolean;
    };
    private toWhatsappNumber;
    sendMessage(telephone: string, message: string): Promise<boolean>;
}
declare const _default: WhatsappService;
export default _default;
//# sourceMappingURL=whatsappService.d.ts.map