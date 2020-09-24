import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import {O} from "ts-toolbelt";
import SetGetter from "../value/value/set-getter";
import RecordValue from "./record-value";

export default class RecordValueCallback<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
> implements RecordValue<MessageType, ValueType, ValidatorType, Result, ValidatableType>
{
    readonly validatables : Result;
    readonly valid : boolean;
    readonly validatable : ValidatableType;
    readonly messages : Result;
    private messageFactory : (result:Result)=>MessageType

    constructor(
        readonly value: ValueType,
        readonly validator : ValidatorType,
        map : (value:ValueType, validators:ValidatorType)=>Result,
        validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, validator);
        this.messages = this.validatables;

        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
    }

    get message() : MessageType {

        return SetGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
