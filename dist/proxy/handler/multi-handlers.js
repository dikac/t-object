export default class MultiHandlers {
    constructor(handlers, withTarget = true) {
        this.handlers = handlers;
        this.withTarget = withTarget;
    }
    getHandler(target) {
        if (this.withTarget) {
            return [target, ...this.handlers];
        }
        else {
            return this.handlers;
        }
    }
}
//# sourceMappingURL=multi-handlers.js.map