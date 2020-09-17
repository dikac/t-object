import Filter from "../../filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import ValidatableInvalid from "@dikac/t-validatable/boolean/invalid";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid(record) {
    let valdiation = (v) => GuardValidatable(v) && ValidatableInvalid(v);
    return Filter(record, valdiation);
}
//# sourceMappingURL=invalid.js.map