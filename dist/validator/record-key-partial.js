import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
export default function RecordKeyPartial(validator, validation, message) {
    return new RecordKeyCallback(validator, (value, validators) => ValidateRecordKeyPartial(value, validators), validation, message);
}
//# sourceMappingURL=record-key-partial.js.map