import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import {O} from "ts-toolbelt";

export default class RecordCallback<
    MessageT = unknown,
    ValueT extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorT extends Validator<O.UnionOf<ValueT>> = Validator<O.UnionOf<ValueT>>,
    Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>,
    ValidatableT extends Validatable = Validatable
> implements
    Value<ValueT>,
    Validatable,
    Validatables<Result>,
    Message<MessageT>
{

    readonly validatables : Result;
    readonly valid : boolean;
    readonly validatable : ValidatableT;
    readonly message : MessageT;
    readonly messages : Result;

    constructor(
        readonly value: ValueT,
        readonly validator : ValidatorT,
        public map : Function<[ValueT, ValidatorT], Result>,
        public validation : Function<[Result], ValidatableT>,
        message : Function<[Result], MessageT>,
    ) {

        this.validatables = this.map(value, validator);
        this.messages = this.validatables;

        this.validatable = this.validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}
