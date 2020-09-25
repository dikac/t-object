import AndBoolean from "./record/boolean/and";
import Validatables from "./validatables";
export default function And(validatable) {
    return new Validatables(validatable, AndBoolean);
}
//# sourceMappingURL=and.js.map