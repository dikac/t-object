import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";
export default function Object_(value, error = ObjectError) {
    AssertObject(value, error);
    return value;
}
//# sourceMappingURL=object.js.map