import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import SetGetter from "../value/value/set-getter";
import Value from "./value";

export default class ValueCallback<
    ValueType = unknown,
    MessageType = unknown,
    RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable
> implements Value<ValueType, MessageType, RecordType, Result, ValidatableType> {

    constructor(
        readonly value: ValueType,
        readonly validators : RecordType,
        readonly map : (value:ValueType, validator:RecordType)=>Result,
        readonly validation : (result:Result)=>ValidatableType,
        readonly messageFactory : (result:Result)=>MessageType,
    ) {
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get validatable () : ValidatableType {

        return  SetGetter(this, 'validatable', this.validation(this.validatables));
    }

    get messages() : Result {

        return this.validatables;
    }

    get validatables() : Result {

        return  SetGetter(this, 'validatables', this.map(this.value, this.validators));
    }

    get message() : MessageType {

        return  SetGetter(this, 'message', this.messageFactory(this.validatables));

    }
}
