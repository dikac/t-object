import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidatableValue from "../validatable/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import Value from "./value";

export default class ValueCallback<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    RecordType extends Record<any, Validator<BaseType, ValueType>> = Record<any, Validator<BaseType, ValueType>>,
    Result extends Record<any, Instance> = Record<any, Instance>,
    ValidatableType extends Validatable = Validatable
> implements Value<BaseType, ValueType, MessageType, RecordType, Result, ValidatableType> {
    constructor(
        public validators : RecordType,
        public handler : (base : BaseType, record : RecordType) => Result,
        public validation : (result : Result)=>ValidatableType,
        public message : (result : Result)=>MessageType
    ) {
    }

   validate<Argument extends ValueType>(argument: Argument) : Replace<ValidatableValue<Argument, MessageType, RecordType, Result, ValidatableType>, true>;
   validate<Argument extends BaseType>(argument: Argument) : Return<BaseType, Argument, ValueType, ValidatableValue<Argument, MessageType, RecordType, Result, ValidatableType>>

    validate<Argument extends BaseType>(argument: Argument) {

        return <ValidatableValue<Argument, MessageType, RecordType, Result, ValidatableType> | Return<BaseType, Argument, ValueType, ValidatableValueCallback<BaseType, MessageType, RecordType, Result, ValidatableType>>>
            new ValidatableValueCallback(argument, this.validators, this.handler, this.validation, this.message);
    }
}
