import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
export default function RecordKeyPartial(validator, validation, message) {
    return new RecordKeyCallback(validator, ValidateRecordKeyPartial, validation, message);
}
//# sourceMappingURL=record-key-partial.js.map