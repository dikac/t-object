import MultiHandlers from "./multi-handlers";
export default class IsExtensibleListAll extends MultiHandlers {
    reset() {
        this.extensible = undefined;
    }
    bindTo(handler) {
        handler.isExtensible = (target) => this.isExtensible(target);
        return handler;
    }
    isExtensible(target) {
        if (this.extensible !== undefined) {
            return this.extensible;
        }
        this.extensible = true;
        for (let object of this.getHandler(target)) {
            this.extensible = Object.isExtensible(object) && this.extensible;
        }
        return this.extensible;
    }
}
//# sourceMappingURL=is-extensible-list-all.js.map