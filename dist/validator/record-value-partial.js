import ValidateMap from "./validatable/record/record-value-partial";
import RecordValueCallback from "./record-value-callback";
export default function RecordValuePartial(validator, validation, message) {
    return new RecordValueCallback(validator, (value, validators) => ValidateMap(value, validators), validation, message);
}
//# sourceMappingURL=record-value-partial.js.map