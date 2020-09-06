import Guard from "../boolean/object";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/string";

export default function Object_(
    value : unknown,
    error : (value:unknown)=>Error = StringError
) : asserts value is object {

    Callback(value, Guard, error);
}
