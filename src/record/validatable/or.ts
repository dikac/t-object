import Validatable from "@dikac/t-validatable/validatable";
import OrBoolean from "../../validatable/record/boolean/or";

export default class Or<Validatables extends Record<PropertyKey, Validatable>> implements Validatable {

    constructor(
        public validatable : Validatables
    ) {
    }


    get valid() : boolean {

       return  OrBoolean(<any>this.validatable)
    }
}
