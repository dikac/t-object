import SetGetter from "../value/value/set-getter";
export default class ValueCallback {
    constructor(value, validators, map, validation, messageFactory) {
        this.value = value;
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        this.messageFactory = messageFactory;
    }
    get valid() {
        return this.validatable.valid;
    }
    get validatable() {
        return SetGetter(this, 'validatable', this.validation(this.validatables));
    }
    get messages() {
        return this.validatables;
    }
    get validatables() {
        return SetGetter(this, 'validatables', this.map(this.value, this.validators));
    }
    get message() {
        return SetGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
//# sourceMappingURL=value-callback.js.map