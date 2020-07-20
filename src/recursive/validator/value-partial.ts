import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatePartialValue from "../../validatable/recursive/value";
import And from "../../validatable/recursive/boolean/and";
import ValueInterface from "@dikac/t-value/value";
import Optional from "../../validator/validatable/recursive/optional";

export default class ValuePartial<
    Val,
    Container extends Record<PropertyKey, Validator<Val>>
    > implements Validator<
    Val,
    ValueInterface<Val> & Validatable & {validation : Optional<Container>}
    >
{
    constructor(
        public validators : Container
    ) {
    }

    validate(argument: Val) : {validation : Optional<Container>} & ValueInterface<Val> & Validatable {

        let results : Optional<Container> = ValidatePartialValue(this.validators, argument, true);

        return  {
            value : argument,
            validation : results,
            valid : And(<any>results)
        };

    }
}



