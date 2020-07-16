import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../record/record";
import Validate from "./record/value";
import And from "@dikac/t-validatable/record/recursive/boolean/and";
import ValueInterface from "@dikac/t-value/value";
import RecursiveInferReturn from "./record/infer/return";

export default class Value<
    Val,
    Container extends RecordObject<PropertyKey, Validator<Val>>
    > implements Validator<
    Val,
    ValueInterface<RecursiveInferReturn<Container>> & Validatable
    >
{
    constructor(
        public validators : Container
    ) {
    }

    validate(value: Val) : ValueInterface<RecursiveInferReturn<Container>> & Validatable {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, value);

        return  {
            value : results,
            // @ts-ignore
            valid : And(results)
        };

    }
}



