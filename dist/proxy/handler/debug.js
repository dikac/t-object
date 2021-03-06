export default class Debug {
    constructor(handler = (name, args) => console.log([name, args])) {
        this.handler = handler;
    }
    getPrototypeOf(target) {
        return Object.getPrototypeOf(target);
    }
    setPrototypeOf(target, v) {
        return Reflect.setPrototypeOf(target, v);
    }
    apply(target, thisArg, argArray) {
        this.handler('apply', [...arguments]);
    }
    construct(target, argArray, newTarget) {
        this.handler('construct', [...arguments]);
        return target;
    }
    defineProperty(target, p, attributes) {
        this.handler('defineProperty', [...arguments]);
        return false;
    }
    deleteProperty(target, p) {
        this.handler('deleteProperty', [...arguments]);
        return false;
    }
    enumerate(target) {
        this.handler('enumerate', [...arguments]);
        return [];
    }
    get(target, p, receiver) {
        this.handler('get', [...arguments]);
    }
    getOwnPropertyDescriptor(target, p) {
        this.handler('getOwnPropertyDescriptor', [...arguments]);
        return undefined;
    }
    has(target, p) {
        this.handler('has', [...arguments]);
        return false;
    }
    isExtensible(target) {
        this.handler('isExtensible', [...arguments]);
        return false;
    }
    ownKeys(target) {
        this.handler('ownKeys', [...arguments]);
        return [];
    }
    preventExtensions(target) {
        this.handler('preventExtensions', [...arguments]);
        return true;
    }
    set(target, p, value, receiver) {
        this.handler('set', [...arguments]);
        return true;
    }
}
//# sourceMappingURL=debug.js.map