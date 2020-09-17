import Guard from "../boolean/empty";
import Callback from "@dikac/t-function/assert/callback";
import EmptyError from "./throwable/empty";
export default function Empty(value, error = EmptyError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=empty.js.map