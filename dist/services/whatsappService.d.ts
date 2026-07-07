declare class WhatsappService {
    private client;
    private isReady;
    constructor();
    private toWhatsappNumber;
    sendMessage(telephone: string, message: string): Promise<boolean>;
}
declare const _default: WhatsappService;
export default _default;
//# sourceMappingURL=whatsappService.d.ts.map