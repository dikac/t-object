import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import MemoizeGetter from "../value/value/memoize-getter";

export default class MapCallback<
    MessageT = unknown,
    ValidatorsT extends Record<any, Validator> = Record<any, Validator>,
    Result extends Record<any, Instance> = Record<any, Instance>,
    ValidatableT extends Validatable = Validatable,
    ValueT extends RecordBase<ValidatorsT> = RecordBase<ValidatorsT>
> implements Map<MessageT, ValidatorsT, Result, ValidatableT, ValueT> {

    public validatables : Result;
    public valid : boolean;
    public validatable : ValidatableT;
    private messageFactory : (result : Result)=>MessageT;
    public messages : Result;

    constructor(
        public value: ValueT,
        public validators : ValidatorsT,
        map : (values : RecordParameter<ValidatorsT>, validators : ValidatorsT)=>Result,
        validation : (result : Result)=>ValidatableT,
        message : (result : Result)=>MessageT,
    ) {

        this.validatables = map(value, this.validators);
        this.messages = this.validatables;

        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messageFactory = message;
    }


    get message() : MessageT {

        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
