import Exists from "../../property/boolean/exists";
import MultiHandlers from "./multi-handlers";
export default class HasListAny extends MultiHandlers {
    constructor() {
        super(...arguments);
        this.handler = {};
    }
    reset() {
        this.handler = {};
    }
    bindTo(handler) {
        handler.has = (target, property) => this.has(target, property);
        return handler;
    }
    has(target, property) {
        if (Exists(this.handler, property)) {
            return this.handler[property];
        }
        this.handler[property] = false;
        for (const handler of this.getHandler(target)) {
            if (Exists(handler, property)) {
                this.handler[property] = true;
                break;
            }
        }
        return this.handler[property];
    }
}
//# sourceMappingURL=has-list-any.js.map