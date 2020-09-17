import IsObject from "../../boolean/object";
import Getter from "../../descriptor/boolean/getter";
import Setter from "../../descriptor/boolean/setter";
import MergeGetterSetter from "../../descriptor/merge-getter-setter";
import MultiHandlers from "./multi-handlers";
export default class PrototypeOfListMerge extends MultiHandlers {
    constructor() {
        super(...arguments);
        this.object = new class {
        };
        this.generated = false;
    }
    reset() {
        this.generated = false;
        this.object = new class {
        };
    }
    bindTo(handler) {
        handler.getPrototypeOf = (target) => this.getPrototypeOf(target);
        return handler;
    }
    setPrototypeOf(target, value) {
        return Reflect.setPrototypeOf(Object.getPrototypeOf(this.object), value);
    }
    getPrototypeOf(target) {
        if (this.generated) {
            return Object.getPrototypeOf(this.object);
        }
        this.generated = true;
        const buffers = new Map();
        for (const handler of this.getHandler(target)) {
            const prototype = Object.getPrototypeOf(handler);
            const symbols = Object.getOwnPropertySymbols(prototype);
            const properties = Object.getOwnPropertyNames(prototype);
            for (const key of [...symbols, ...properties]) {
                let descriptor = Object.getOwnPropertyDescriptor(prototype, key);
                if (!descriptor) {
                    continue;
                }
                // merge getter & setter
                if (buffers.has(key) && IsObject(buffers.get(key))) {
                    if ((Getter(buffers.get(key)) && Setter(descriptor)) ||
                        (Setter(buffers.get(key)) && Getter(descriptor))) {
                        descriptor = MergeGetterSetter(buffers.get(key), descriptor);
                    }
                }
                buffers.set(key, descriptor);
            }
        }
        const prototype = Object.getPrototypeOf(this.object);
        for (const [property, descriptor] of buffers) {
            if (IsObject(descriptor)) {
                Object.defineProperty(prototype, property, descriptor);
            }
        }
        return this.getPrototypeOf(target);
    }
}
//# sourceMappingURL=prototype-of-list-merge.js.map