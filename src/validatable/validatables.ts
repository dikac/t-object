import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "./validatables/validatables";
import FunctionSingle from "@dikac/t-function/function-single";

export default class Validatables<
    RecordT extends Record<any, Validatable>  = Record<PropertyKey, Validatable>,
    Boolean extends boolean = boolean
> implements
    Validatable,
    ValidatablesInterface<RecordT>
{

    constructor(
        public validatables : RecordT,
        public validation : FunctionSingle<RecordT, Boolean>
    ) {
    }

    get valid() : Boolean {

        return this.validation(this.validatables)
    }
}

