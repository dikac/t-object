import Class from "@dikac/t-class/boolean/class";
import NameNotFound from "./name-not-found";
export default function Name(value) {
    let constructor;
    if (value && value.constructor && value.constructor.name) {
        constructor = value.constructor.name;
    }
    if (!constructor || constructor === 'Function') {
        if (Class(value)) {
            return value.name;
        }
    }
    if (constructor) {
        return constructor;
    }
    throw new Error(NameNotFound(false, value));
}
//# sourceMappingURL=name.js.map