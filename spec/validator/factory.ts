import ValidatableFactory from "../validatable/factory";

export default class Factory  {

    constructor(private type : string) {
    }

    validate(value : unknown) : ValidatableFactory {

        return new ValidatableFactory(value, this.type);
    }
}

