import HandlerAlreadyExist from "./string/handler-already-exist";
/**
 * simple object container
 */
export default class Builder {
    constructor(context) {
        this.context = context;
        this.container = new Map();
    }
    clear() {
        this.container.clear();
    }
    set(property, handler) {
        if (this.container.has(property)) {
            throw new Error(HandlerAlreadyExist(property));
        }
        this.container.set(property, handler);
    }
    get(property) {
        return this.container.get(property);
    }
    delete(property) {
        return this.container.delete(property);
    }
    has(property) {
        return this.container.has(property);
    }
    [Symbol.iterator]() {
        return this.container[Symbol.iterator]();
    }
    build(target = {}, option) {
        for (let [property, value] of this) {
            value(target, property, this.context, option);
        }
        return target;
    }
    buildAsync(target = {}, option) {
        const promises = [];
        for (let [property, value] of this) {
            const returns = value(target, property, this.context, option);
            promises.push(Promise.resolve(returns));
        }
        return Promise.all(promises).then(() => target);
    }
}
//# sourceMappingURL=builder.js.map