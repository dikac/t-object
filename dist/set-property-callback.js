import MemoizeGetter from "./value/value/set-property";
export default function SetPropertyCallback(object, property, factory, writable = true, configurable = true) {
    return Object.defineProperty(object, property, {
        configurable: true,
        get() {
            return MemoizeGetter(object, property, factory(), writable, configurable);
        }
    });
}
//# sourceMappingURL=set-property-callback.js.map