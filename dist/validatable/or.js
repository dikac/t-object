import OrBoolean from "./record/boolean/or";
import Validatables from "./validatables";
// TODO ADD SPEC FOR PARTIAL
export default function Or(validatable) {
    return new Validatables(validatable, OrBoolean);
}
//# sourceMappingURL=or.js.map