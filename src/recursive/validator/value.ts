import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import Validate from "../../validator/validatable/recursive/value";
import And from "../../validatable/recursive/boolean/and";
import ValueInterface from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/recursive/recursive";

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

    validate(argument: Val) : ValueInterface<RecursiveInferReturn<Container>> & Validatable {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, argument);

        return  {
            value : results,
            // @ts-ignore
            valid : And(results)
        };

    }
}



