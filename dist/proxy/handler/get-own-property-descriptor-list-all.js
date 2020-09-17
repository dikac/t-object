import Exists from "../../property/boolean/exists";
import MultiHandlers from "./multi-handlers";
export default class GetOwnPropertyDescriptorListAll extends MultiHandlers {
    constructor() {
        super(...arguments);
        this.descriptor = {};
    }
    reset() {
        this.descriptor = {};
    }
    bindTo(handler) {
        handler.getOwnPropertyDescriptor = (target, p) => this.getOwnPropertyDescriptor(target, p);
        return handler;
    }
    getOwnPropertyDescriptor(target, property) {
        if (Exists(this.descriptor, property)) {
            // @ts-ignore
            return this.descriptor[property];
        }
        const descriptors = [];
        for (const object of this.getHandler(target)) {
            const descriptor = Reflect.getOwnPropertyDescriptor(object, property);
            if (descriptor) {
                descriptors.push(descriptor);
            }
        }
        if (descriptors.length === 0) {
            // @ts-ignore
            this.descriptor[property] = undefined;
        }
        else if (descriptors.length === 1) {
            // @ts-ignore
            this.descriptor[property] = descriptors[0];
        }
        else {
            const descriptor = descriptors.shift();
            for (const compare of descriptors) {
                for (const prop of ['configurable', 'enumerable', /*'value',*/ 'writable', 'get', 'set']) {
                    if (descriptor[prop] !== compare[prop]) {
                        throw new Error(`descriptor.${prop} is not consistent between source`);
                    }
                }
            }
            // @ts-ignore
            this.descriptor[property] = descriptor;
        }
        // @ts-ignore
        return this.descriptor[property];
    }
}
//# sourceMappingURL=get-own-property-descriptor-list-all.js.map