import Exists from "../../property/boolean/exists";
import Writable from "../../property/boolean/writable";
import MultiHandlers from "./multi-handlers";
export default class SetListAll extends MultiHandlers {
    constructor() {
        super(...arguments);
        this.settable = {};
    }
    reset() {
        this.settable = {};
    }
    bindTo(handler) {
        handler.set = (target, property, value, receiver) => this.set(target, property, value, receiver);
        return handler;
    }
    set(target, property, value, receiver) {
        if (Exists(this.settable, property)) {
            let list = this.settable[property];
            for (let object of list) {
                object[property] = value;
            }
            return list.length !== 0;
        }
        const list = [];
        for (let handler of this.getHandler(target)) {
            if (Writable(handler, property)) {
                list.push(handler);
            }
        }
        this.settable[property] = list;
        return this.set(target, property, value, receiver);
    }
}
//# sourceMappingURL=set-list-all.js.map