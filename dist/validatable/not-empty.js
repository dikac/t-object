import NotEmptyArgument from "../boolean/not-empty";
export default class NotEmpty {
    constructor(value, _message) {
        this.value = value;
        this._message = _message;
        this.valid = NotEmptyArgument(value);
    }
    get message() {
        return this._message(this);
    }
}
//# sourceMappingURL=not-empty.js.map