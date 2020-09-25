import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import Pick from "../pick";
import MemoizeAccessor from "../function/memoize-accessor";

export default class MapCallback<
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>
> implements Map<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {

    #value : ValueType;
    #message : (result : Result)=>MessageType;

    constructor(
        value: ValueType,
        public validators : ValidatorsType,
        private map : (values : RecordParameter<ValidatorsType>, validators : ValidatorsType)=>Result,
        private validation : (result : Result)=>ValidatableType,
        message : (result : Result)=>MessageType,
    ) {

        this.#value = value;
        this.#message = message;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    @MemoizeAccessor()
    get validatable() : ValidatableType {

        return this.validation(this.validatables);
    }

    get messages () : Result {

        return this.validatables;
    }

    @MemoizeAccessor()
    get validatables() : Result {

        return this.map(this.#value, this.validators);
    }

    @MemoizeAccessor()
    get value () : ValueType {

        return Pick(this.#value, ...Object.keys(this.validators)) as ValueType;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.validatables);
    }
}
