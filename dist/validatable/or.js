import OrBoolean from "./record/boolean/or";
import Validatables from "./validatables";
export default function Or(validatable) {
    return new Validatables(validatable, OrBoolean);
}
//# sourceMappingURL=or.js.map