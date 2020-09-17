import Guard from "../boolean/object";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/object";
export default function Object_(value, error = StringError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=object.js.map