import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import SetGetter from "../value/value/set-getter";
import SetProperty from "../value/value/set-property";
import Pick from "../pick";

export default class MapCallback<
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>
> implements Map<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {

    private messageFactory : (result : Result)=>MessageType;

    #value : ValueType;

    constructor(
        value: ValueType,
        public validators : ValidatorsType,
        private map : (values : RecordParameter<ValidatorsType>, validators : ValidatorsType)=>Result,
        private validation : (result : Result)=>ValidatableType,
        message : (result : Result)=>MessageType,
    ) {

        this.#value = value;

        this.messageFactory = message;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get validatable() : ValidatableType {

        return SetProperty(this, 'validatable', this.validation(this.validatables));
    }

    get messages () : Result {

        return this.validatables;
    }

    get validatables() : Result {

        return SetProperty(this, 'validatables', this.map(this.#value, this.validators));
    }

    get value () : ValueType {

        return SetProperty(this, 'value', Pick(this.#value, ...Object.keys(this.validators)) as ValueType);
    }

    get message() : MessageType {

        return SetGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
