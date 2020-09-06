import Guard from "../boolean/empty";
import Callback from "@dikac/t-function/assert/callback";
import EmptyError from "./throwable/empty";

export default function Empty(
    value : object,
    error : (value:object)=>Error = EmptyError
) : asserts value is object {

    Callback(value, Guard, error);
}
