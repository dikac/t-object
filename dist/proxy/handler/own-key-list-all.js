import Unique from "@dikac/t-array/unique";
import MultiHandlers from "./multi-handlers";
export default class OwnKeyListAll extends MultiHandlers {
    reset() {
        this.keys = undefined;
    }
    bindTo(handler) {
        handler.ownKeys = (target) => this.ownKeys(target);
        return handler;
    }
    ownKeys(target) {
        if (this.keys) {
            return this.keys;
        }
        this.keys = [];
        for (let object of this.getHandler(target)) {
            this.keys.push(...Object.getOwnPropertySymbols(object));
            this.keys.push(...Object.getOwnPropertyNames(object));
        }
        this.keys = Unique(this.keys);
        return this.keys;
    }
}
//# sourceMappingURL=own-key-list-all.js.map