import ValidatableValid from "../../../validatable/record/valid";
import Map from "./map";
import RemoveUndefined from "../../../omit-undefined";
export default function Valid(record) {
    return Map(RemoveUndefined(ValidatableValid(record)));
}
//# sourceMappingURL=valid.js.map