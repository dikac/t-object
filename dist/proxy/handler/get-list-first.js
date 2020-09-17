import Exists from "../../property/boolean/exists";
import Readable from "../../property/boolean/readable";
import Function from "@dikac/t-function/boolean/function";
import MultiHandlers from "./multi-handlers";
/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetListFirst extends MultiHandlers {
    constructor() {
        super(...arguments);
        /**
         * mapping for getter handler
         */
        this.handler = {};
    }
    /**
     * reset cached mapping
     */
    reset() {
        this.handler = {};
    }
    /**
     * set handler to other {@link ProxyHandler<Argument>}
     * @param handler
     */
    bindTo(handler) {
        handler.get = (target, property, receiver) => this.get(target, property, receiver);
        return handler;
    }
    /**
     * get the first compatible {@link handlers} property
     *
     * @param target
     * @param property
     * @param receiver
     */
    get(target, property, receiver) {
        if (Exists(this.handler, property)) {
            return this.handler[property][property];
        }
        for (const handler of this.getHandler(target)) {
            if (Readable(handler, property)) {
                if (Function(handler[property])) {
                    this.handler[property] = {
                        [property]: (...argument) => handler[property](...argument)
                    };
                }
                else {
                    this.handler[property] = handler;
                }
                return handler[property];
            }
        }
        this.handler[property] = { [property]: undefined };
        return undefined;
    }
}
//# sourceMappingURL=get-list-first.js.map