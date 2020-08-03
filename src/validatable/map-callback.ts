import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import RecordParameter from "../validator/parameter/base/record/infer";
import Record from "../record";
import RecordBase from "../validator/parameter/base/record/infer";


export default class ValueCallback<
    MessageT = unknown,
    RecordT extends globalThis.Record<PropertyKey, Validator> = globalThis.Record<PropertyKey, Validator>,
    Result extends
        Partial<Record<Validatable>> =
        Partial<Record<Validatable>>,
    ValidatableT extends Validatable = Validatable,
    ValueT extends RecordBase<RecordT> = RecordBase<RecordT>
> implements Value<ValueT>, Validatable, Validatables<Result>, Message<MessageT> {

    public validatables : Result;
    public valid : boolean;
    public validatable : ValidatableT;
    public message : MessageT;
    public messages : Result;

    constructor(
        public value: ValueT,
        public validators : RecordT,
        public handler : Function<[RecordParameter<RecordT>, RecordT], Result>,
        public validation : Function<[Result], ValidatableT>,
        message : Function<[Result], MessageT>,
    ) {

        this.validatables = this.handler(value, this.validators);
        this.messages = this.validatables;

        this.validatable = this.validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}
