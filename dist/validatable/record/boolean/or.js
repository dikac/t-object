import Empty from "../../../boolean/empty";
import Valid from "../valid";
import OmitUndefined from "../../../omit-undefined";
export default function Or(object) {
    return !Empty(Valid(OmitUndefined(object)));
}
//# sourceMappingURL=or.js.map