import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidatableValue from "../validatable/value";
import Message from "@dikac/t-message/message";
import Return from "@dikac/t-validator/validatable/simple";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import Value from "./value";

export default class ValueCallback<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    RecordT extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>,
    Result extends Record<any, Instance> = Record<any, Instance>,
    ValidatableT extends Validatable = Validatable
> implements Value<BaseT, ValueT, MessageT, RecordT, Result, ValidatableT> {
    constructor(
        public validators : RecordT,
        public handler : (base : BaseT, record : RecordT) => Result,
        public validation : (result : Result)=>ValidatableT,
        public message : (result : Result)=>MessageT
    ) {
    }

   validate<Argument extends ValueT>(argument: Argument) : Replace<ValidatableValue<Argument, MessageT, RecordT, Result, ValidatableT>, true>;
   validate<Argument extends BaseT>(argument: Argument) : Return<BaseT, Argument, ValueT, ValidatableValue<Argument, MessageT, RecordT, Result, ValidatableT>>

    validate<Argument extends BaseT>(argument: Argument) {

        return <ValidatableValue<Argument, MessageT, RecordT, Result, ValidatableT> | Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>>> new ValidatableValueCallback(argument, this.validators, this.handler, this.validation, this.message);
    }
}
