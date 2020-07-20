import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatePartial from "../../validatable/record/map";
import And from "../../validatable/record/boolean/and";
import Value from "@dikac/t-value/value";
import RecursiveInferArgument from "./parameter/parameter";
import Optional from "../../validator/validatable/record/optional";

export default class RecordPartial<
    Container extends Record<PropertyKey, Validator<unknown>>
> implements Validator<
    RecursiveInferArgument<Container>,
    Value<RecursiveInferArgument<Container>> & Validatable & {validatable : Optional<Container>}
> {
    constructor(
        public validators : Container
    ) {
    }

    validate(argument: RecursiveInferArgument<Container>) : Value<RecursiveInferArgument<Container>> & Validatable & {validatable : Optional<Container>} {

        let results : Optional<Container> = ValidatePartial(this.validators, argument, true);

        return  {
            validatable : results,
            value : argument,
            valid : And(<any>results)
        };

    }
}



