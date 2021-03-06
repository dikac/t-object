import Filter from "../../filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import ValidatableInvalid from "@dikac/t-validatable/boolean/invalid";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid(record) {
    let validation = (v) => GuardValidatable(v) && ValidatableInvalid(v);
    return Filter(record, validation);
}
//# sourceMappingURL=invalid.js.map