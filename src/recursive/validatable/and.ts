import Validatable from "@dikac/t-validatable/validatable";
import AndBoolean from "../../validatable/recursive/boolean/and";

export default class And<
    Validatables extends Record<PropertyKey, Validatable>
> implements Validatable {

    constructor(
        public validatable : Validatables
    ) {
    }

    get valid() : boolean {

       return AndBoolean(<any>this.validatable)
    }
}
