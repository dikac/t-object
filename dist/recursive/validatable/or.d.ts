import Validatable from "@dikac/t-validatable/validatable";
export default class Or<Validatables extends Record<PropertyKey, Validatable>> implements Validatable {
    validatable: Validatables;
    constructor(validatable: Validatables);
    get valid(): boolean;
}
