import Exists from "../../property/boolean/exists";
export default function MergeAnonymous(...handlers) {
    let result = {};
    const properties = [
        "getPrototypeOf", "setPrototypeOf", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor", "has",
        "get", "set", "deleteProperty", "defineProperty", "enumerate", "ownKeys", "apply", "construct",
    ];
    for (let handler of handlers) {
        for (let property of properties) {
            if (Exists(handler, property)) {
                result[property] = (...argument) => handler[property](...argument);
            }
        }
    }
    return result;
}
//# sourceMappingURL=merge-anonymous.js.map