import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import InferType from "@dikac/t-validator/type/infer";
import Validators from "../validator/validators/validators";

export default class RecordCallback<
    MessageT = unknown,
    ValueValidator extends Validator = Validator,
    KeyValidator extends Validator<PropertyKey> = Validator<PropertyKey>,
    Val extends Record<InferType<KeyValidator>, InferType<ValueValidator>> = Record<InferType<KeyValidator>, InferType<ValueValidator>>,
    Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>,
    ValidatableT extends Validatable = Validatable
> implements
    Value<Val>,
    Validatable,
    Validatables<Result>,
    Message<MessageT>,
    Validators<{value:ValueValidator, key:KeyValidator}>
{

    readonly validators : {value:ValueValidator, key:KeyValidator};
    readonly validatables : Result;
    readonly valid : boolean;
    readonly validatable : ValidatableT;
    readonly message : MessageT;
    readonly messages : Result;

    constructor(
        readonly value: Val,
        validatorValue : ValueValidator,
        keyValue : KeyValidator,
        public map : Function<[Record<InferType<KeyValidator>, InferType<ValueValidator>>, KeyValidator, ValueValidator], Result>,
        public validation : Function<[Result], ValidatableT>,
        message : Function<[Result], MessageT>,
    ) {

        this.validators = {value:validatorValue, key:keyValue};

        this.validatables = this.map(value, keyValue, validatorValue);
        this.messages = this.validatables;

        this.validatable = this.validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}
