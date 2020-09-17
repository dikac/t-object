import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import Filter from "../../filter";
import ValidatableValid from "@dikac/t-validatable/boolean/value";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid(record) {
    let validation = (v) => GuardValidatable(v) && ValidatableValid(v); //.valid;
    return Filter(record, validation);
}
//# sourceMappingURL=valid.js.map