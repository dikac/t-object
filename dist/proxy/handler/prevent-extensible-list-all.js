import MultiHandlers from "./multi-handlers";
export default class PreventExtensibleListAll extends MultiHandlers {
    reset() {
        this.extensible = undefined;
    }
    bindTo(handler) {
        handler.preventExtensions = (target) => this.preventExtensions(target);
        return handler;
    }
    preventExtensions(target) {
        let result = true;
        for (let object of this.getHandler(target)) {
            result = Reflect.preventExtensions(object) && result;
        }
        return result;
    }
}
//# sourceMappingURL=prevent-extensible-list-all.js.map