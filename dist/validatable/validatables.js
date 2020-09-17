export default class Validatables {
    constructor(validatables, validation) {
        this.validatables = validatables;
        this.validation = validation;
    }
    get valid() {
        return this.validation(this.validatables);
    }
}
//# sourceMappingURL=validatables.js.map