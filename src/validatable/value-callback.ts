import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import SetGetter from "../value/value/set-getter";
import Value from "./value";

export default class ValueCallback<
    ValueT = unknown,
    MessageT = unknown,
    RecordT extends Record<PropertyKey, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>,
    Result extends Record<PropertyKey, ValidatorValidatable> = Record<PropertyKey, ValidatorValidatable>,
    ValidatableT extends Validatable = Validatable
> implements Value<ValueT, MessageT, RecordT, Result, ValidatableT> {

    constructor(
        readonly value: ValueT,
        readonly validators : RecordT,
        readonly map : (value:ValueT, validator:RecordT)=>Result,
        readonly validation : (result:Result)=>ValidatableT,
        readonly messageFactory : (result:Result)=>MessageT,
    ) {

    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get validatable () : ValidatableT {

        return  SetGetter(this, 'validatable', this.validation(this.validatables));
    }

    get messages() : Result {

        return this.validatables;
    }

    get validatables() : Result {

        return  SetGetter(this, 'validatables', this.map(this.value, this.validators));
    }

    get message() : MessageT {

        return  SetGetter(this, 'message', this.messageFactory(this.validatables));

    }
}
