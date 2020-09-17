import ValidatableInvalid from "../../../validatable/record/invalid";
import Map from "./map";
import RemoveUndefined from "../../../omit-undefined";
export default function Invalid(record) {
    return Map(RemoveUndefined(ValidatableInvalid(record)));
}
//# sourceMappingURL=invalid.js.map