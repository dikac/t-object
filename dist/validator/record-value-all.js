import ValidateMap from "./validatable/record/record-value";
import RecordValueCallback from "./record-value-callback";
export default function RecordValueAll(validator, validation, message) {
    return new RecordValueCallback(validator, ValidateMap, validation, message);
}
//# sourceMappingURL=record-value-all.js.map