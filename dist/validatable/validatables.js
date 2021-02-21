export default class Validatables {
    constructor(validatables, validation) {
        this.validatables = validatables;
        this.validation = validation;
        this.valid = this.validation(this.validatables);
    }
}
//# sourceMappingURL=validatables.js.map