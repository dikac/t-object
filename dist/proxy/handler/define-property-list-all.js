import MultiHandlers from "./multi-handlers";
export default class DefinePropertyListAll extends MultiHandlers {
    bindTo(handler) {
        handler.defineProperty = (target, property, attributes) => this.defineProperty(target, property, attributes);
        return handler;
    }
    defineProperty(target, property, attributes) {
        let result = true;
        for (let object of this.getHandler(target)) {
            result = Reflect.defineProperty(object, property, attributes) && result;
        }
        return result;
    }
}
//# sourceMappingURL=define-property-list-all.js.map