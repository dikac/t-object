import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";

export default function Object(
    value : unknown,
    error : (value:unknown)=>Error = ObjectError
) : object {

    AssertObject(value, error);

    return value;
}
