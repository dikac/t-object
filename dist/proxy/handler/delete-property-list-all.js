import MultiHandlers from "./multi-handlers";
export default class DeletePropertyListAll extends MultiHandlers {
    bindTo(handler) {
        handler.deleteProperty = (target, property) => this.deleteProperty(target, property);
        return handler;
    }
    deleteProperty(target, property) {
        let deleted = false;
        for (let handler of this.getHandler(target)) {
            deleted = (delete handler[property]) || deleted;
        }
        return deleted;
    }
}
//# sourceMappingURL=delete-property-list-all.js.map