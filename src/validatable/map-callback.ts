import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import MapValue from "../value/value/record/map";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import SetGetter from "../value/value/set-getter";
import SetProperty from "../value/value/set-property";

export default class MapCallback<
    MessageT = unknown,
    ValidatorsT extends Record<any, Validator> = Record<any, Validator>,
    Result extends Record<any, Instance> = Record<any, Instance>,
    ValidatableT extends Validatable = Validatable,
    ValueT extends RecordBase<ValidatorsT> = RecordBase<ValidatorsT>
> implements Map<MessageT, ValidatorsT, Result, ValidatableT, ValueT> {

    private messageFactory : (result : Result)=>MessageT;

    #value : ValueT;

    constructor(
        value: ValueT,
        public validators : ValidatorsT,
        private map : (values : RecordParameter<ValidatorsT>, validators : ValidatorsT)=>Result,
        private validation : (result : Result)=>ValidatableT,
        message : (result : Result)=>MessageT,
    ) {

        this.#value = value;

        this.messageFactory = message;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get validatable() : ValidatableT {

        const validatable = this.validation(this.validatables);

        return SetProperty(this, 'validatable', validatable);
    }

    get messages () : Result {

        return this.validatables;
    }

    get validatables() : Result {

        const validatables = this.map(this.#value, this.validators);

        return SetProperty(this, 'validatables', validatables);
    }

    get value () : ValueT {

        const value = MapValue(this.validatables) as ValueT;

        return SetProperty(this, 'value', value);
    }

    get message() : MessageT {

        return SetGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
