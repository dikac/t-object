import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../record/recursive/record";
import Validate from "./record/recursive/record";
import And from "@dikac/t-validatable/record/recursive/boolean/and";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "./record/recursive/infer/return";
import RecursiveInferArgument from "./record/recursive/infer/argument";

export default class RecursiveRecord<
    Container extends RecordObject<PropertyKey, Validator<unknown>>
    > implements Validator<
    RecursiveInferArgument<Container>,
    Value<RecursiveInferReturn<Container>> & Validatable
    >
{
    constructor(
        public validators : Container
    ) {
    }

    validate(value: RecursiveInferArgument<Container>) : Value<RecursiveInferReturn<Container>> & Validatable {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, value);

        return  {
            value : results,
            // @ts-ignore
            valid : And(results)
        };

    }
}



