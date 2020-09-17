import SetGetter from "../value/value/set-getter";
export default class RecordCallback {
    constructor(value, validator, map, validation, message) {
        this.value = value;
        this.validator = validator;
        this.messageFactory = message;
        this.validatables = map(value, validator);
        this.messages = this.validatables;
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
    }
    get message() {
        return SetGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
//# sourceMappingURL=record-value-callback.js.map