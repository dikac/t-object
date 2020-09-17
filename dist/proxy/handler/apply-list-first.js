import IsFunction from "@dikac/t-function/boolean/function";
import MultiHandlers from "./multi-handlers";
export default class ApplyListFirst extends MultiHandlers {
    reset() {
        this.callback = undefined;
    }
    bindTo(handler) {
        handler.apply = (target, thisArg, argArray) => this.apply(target, thisArg, argArray);
        return handler;
    }
    apply(target, thisArg, argArray) {
        if (this.callback !== undefined) {
            if (this.callback) {
                return this.callback(...argArray);
            }
            else {
                throw new Error('Callable is not found');
            }
        }
        this.callback = null;
        for (let handler of this.getHandler(target)) {
            if (IsFunction(handler)) {
                this.callback = (...args) => handler(...args);
                break;
            }
        }
        return this.apply(target, thisArg, argArray);
    }
}
//# sourceMappingURL=apply-list-first.js.map