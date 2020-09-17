import EmptyArgument from "../boolean/empty";
export default class Empty {
    constructor(value, _message) {
        this.value = value;
        this._message = _message;
        this.valid = EmptyArgument(value);
    }
    get message() {
        return this._message(this);
    }
}
//# sourceMappingURL=empty.js.map