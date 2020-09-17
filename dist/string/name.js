import Class from "@dikac/t-class/boolean/class";
import NameNotFound from "./name-not-found";
export default function Name(value) {
    if (value && value.constructor && value.constructor.name) {
        return value.constructor.name;
    }
    if (Class(value)) {
        return value.name;
    }
    throw new Error(NameNotFound(false, value));
}
//# sourceMappingURL=name.js.map