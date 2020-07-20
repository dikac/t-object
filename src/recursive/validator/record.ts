import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validate from "../../validatable/recursive/map";
import And from "../../validatable/recursive/boolean/and";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/recursive/record";
import RecursiveInferArgument from "./parameter/parameter";

export default class Record<
    Container extends globalThis.Record<PropertyKey, Validator<unknown>>
> implements Validator<
    RecursiveInferArgument<Container>,
    Value<RecursiveInferArgument<Container>> & Validatable & {validatable : RecursiveInferReturn<Container>}
> {
    constructor(
        public validators : Container
    ) {
    }

    validate(argument: RecursiveInferArgument<Container>) : Value<RecursiveInferArgument<Container>> & Validatable & {validatable : RecursiveInferReturn<Container>} {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, argument, false);

        return  {
            validatable : results,
            value : argument,
            valid : And(<any>results)
        };

    }
}



