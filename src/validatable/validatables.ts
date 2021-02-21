import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "./validatables/validatables";

export default class Validatables<
    RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    Boolean extends boolean = boolean
> implements
    Validatable,
    ValidatablesInterface<RecordType>
{

    readonly valid : boolean;

    constructor(
        public validatables : RecordType,
        public validation : (value:RecordType)=>Boolean
    ) {

        this.valid = this.validation(this.validatables);
    }
}

