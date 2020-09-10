import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";

export default function Object(
    value : object,
    error : (value:object)=>Error = ObjectError
) : object {

    AssertObject(value, error);

    return value;
}
