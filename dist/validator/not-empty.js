import NotEmptyValidatable from "../validatable/not-empty";
export default class NotEmpty {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new NotEmptyValidatable(value, this.message);
    }
}
//# sourceMappingURL=not-empty.js.map