import ValidatableRecordCallback from "../validatable/record-value-callback";
export default class RecordKeyCallback {
    constructor(validator, handler, validation, message) {
        this.validator = validator;
        this.handler = handler;
        this.validation = validation;
        this.message = message;
    }
    validate(argument) {
        return new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message);
    }
}
//# sourceMappingURL=record-key-callback.js.map