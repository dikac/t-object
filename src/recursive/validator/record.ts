import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import Validate from "../../validator/validatable/recursive/map";
import And from "../../validatable/recursive/boolean/and";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/recursive/recursive";
import RecursiveInferArgument from "../../validator/parameter/recursive/recursive";

export default class Record<
    Container extends RecordObject<PropertyKey, Validator<unknown>>
> implements Validator<
    RecursiveInferArgument<Container>,
    Value<RecursiveInferArgument<Container>> & Validatable & {validatable : RecursiveInferReturn<Container>}
> {
    constructor(
        public validators : Container
    ) {
    }

    validate(argument: RecursiveInferArgument<Container>) : Value<RecursiveInferArgument<Container>> & Validatable & {validatable : RecursiveInferReturn<Container>} {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, argument);

        return  {
            validatable : results,
            value : argument,
            valid : And(<any>results)
        };

    }
}



