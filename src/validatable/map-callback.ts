import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import RecordParameter from "../validator/parameter/base/record/infer";
import Record from "../record";
import RecordBase from "../validator/parameter/base/record/infer";


export default class ValueCallback<
    MessageT = unknown,
    Container extends globalThis.Record<PropertyKey, Validator> = globalThis.Record<PropertyKey, Validator>,
    Result extends
        Partial<Record<ValidatableInterface>> =
        Partial<Record<ValidatableInterface>>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    V extends RecordBase<Container> = RecordBase<Container>
> implements ValueInterface<V>, ValidatableInterface, Validatables<Result>, Message<MessageT> {

    public validatables : Result;
    public valid : boolean;
    public validatable : Validatable;
    public message : MessageT;
    public messages : Result;

    constructor(
        public value: V,
        public validators : Container,
        public handler : Function<[RecordParameter<Container>, Container], Result>,
        public validation : Function<[Result], Validatable>,
        message : Function<[Result], MessageT>,
    ) {

        this.validatables = this.handler(value, this.validators);
        this.messages = this.validatables;

        this.validatable = this.validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}
