export default class Property {
    constructor(object, key) {
        this.object = object;
        this.key = key;
    }
    get value() {
        return this.object[this.key];
    }
    set value(value) {
        this.object[this.key] = value;
    }
}
//# sourceMappingURL=property.js.map