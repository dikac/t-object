import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validatable/record/value";
import And from "../../validatable/record/boolean/and";
import ValueInterface from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/record/record";

export default class Value<
    Val,
    Container extends Record<PropertyKey, Validator<Val>>
    > implements Validator<
    Val,
    ValueInterface<Val> & Validatable & {validation : RecursiveInferReturn<Container>}
    >
{
    constructor(
        public validators : Container
    ) {
    }

    validate(argument: Val) : {validation : RecursiveInferReturn<Container>} & ValueInterface<Val> & Validatable {

        let results : RecursiveInferReturn<Container> = ValidateValue(this.validators, argument, false);

        return  {
            value : argument,
            validation : results,
            valid : And(<any>results)
        };

    }
}



