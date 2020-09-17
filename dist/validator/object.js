import ObjectValidatable from "../validatable/object";
export default class Object_ {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return ObjectValidatable(value, this.message);
    }
}
//# sourceMappingURL=object.js.map