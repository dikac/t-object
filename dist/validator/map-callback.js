import ValidatableMapCallback from "../validatable/map-callback";
export default class MapCallback {
    constructor(validators, map, validation, message) {
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        this.message = message;
    }
    validate(argument) {
        return new ValidatableMapCallback(argument, this.validators, this.map, this.validation, this.message);
    }
}
//# sourceMappingURL=map-callback.js.map