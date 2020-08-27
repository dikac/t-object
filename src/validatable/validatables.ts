import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "./validatables/validatables";

export default class Validatables<
    RecordT extends Record<PropertyKey, Validatable>  = Record<PropertyKey, Validatable>,
    Boolean extends boolean = boolean
> implements
    Validatable,
    ValidatablesInterface<RecordT>
{

    constructor(
        public validatables : RecordT,
        public validation : (value:RecordT)=>Boolean
    ) {
    }

    get valid() : Boolean {

        return this.validation(this.validatables)
    }
}

