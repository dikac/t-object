import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import {O} from "ts-toolbelt";
import MemoizeGetter from "../value/value/memoize-getter";

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
    readonly messages : Result;
    private messageFactory : (result:Result)=>MessageT

    constructor(
        readonly value: ValueT,
        readonly validator : ValidatorT,
        map : (value:ValueT, validators:ValidatorT)=>Result,
        validation : (result:Result)=>ValidatableT,
        message : (result:Result)=>MessageT,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, validator);
        this.messages = this.validatables;

        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
    }

    get message() : MessageT {

        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
