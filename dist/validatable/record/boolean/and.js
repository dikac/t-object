import Empty from "../../../boolean/empty";
import Invalid from "../invalid";
import OmitUndefined from "../../../omit-undefined";
export default function And(object) {
    return Empty(Invalid(OmitUndefined(object)));
}
//# sourceMappingURL=and.js.map