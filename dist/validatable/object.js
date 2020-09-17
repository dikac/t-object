import Callback from "@dikac/t-validator/validatable/callback-function";
import ObjectGuard from "../boolean/object";
export default function Object_(value, message) {
    return Callback(value, ObjectGuard, message);
}
//# sourceMappingURL=object.js.map