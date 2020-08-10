import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback, {Interface as ValidatableValueCallbackInterface} from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Return from "@dikac/t-validator/validatable/simple";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";

export type Interface<
    BaseT,
    ValueT extends BaseT,
    MessageT,
    RecordT extends Record<any, Validator<BaseT, ValueT>>,
    Result extends Record<any, Instance>,
    ValidatableT extends Validatable
> = Validator<
        BaseT,
        ValueT,
    boolean, true,
    ValidatableValueCallbackInterface<BaseT, MessageT, RecordT, Result, ValidatableT>
    > &
    Validators<RecordT> &
    Message<Function<[Result], MessageT>> &
    Validation<Function<[Result], ValidatableT>>;

export default class ValueCallback<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    RecordT extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>,
    Result extends Record<any, Instance> = Record<any, Instance>,
    ValidatableT extends Validatable = Validatable
> implements Interface<BaseT, ValueT, MessageT, RecordT, Result, ValidatableT> {
    constructor(
        public validators : RecordT,
        public handler : Function<[BaseT, RecordT], Result>,
        public validation : Function<[Result], ValidatableT>,
        public message : Function<[Result], MessageT>
    ) {
    }

   validate<Argument extends ValueT>(argument: Argument) : Replace<ValidatableValueCallbackInterface<Argument, MessageT, RecordT, Result, ValidatableT>, true>;
   validate<Argument extends BaseT>(argument: Argument) : Return<BaseT, Argument, ValueT, ValidatableValueCallbackInterface<Argument, MessageT, RecordT, Result, ValidatableT>>

    validate<Argument extends BaseT>(argument: Argument) {

        return <ValidatableValueCallbackInterface<Argument, MessageT, RecordT, Result, ValidatableT> | Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>>> new ValidatableValueCallback(argument, this.validators, this.handler, this.validation, this.message);
    }
}
