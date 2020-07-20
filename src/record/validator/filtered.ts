import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatePartial from "../../validatable/record/map";
import And from "../../validatable/record/boolean/and";
import Value from "@dikac/t-value/value";
import RecursiveInferArgument from "./parameter/parameter";
import FunctionSingle from "@dikac/t-function/function-single";
import Optional from "../../validator/validatable/record/optional";

export default class Filtered<
    Container extends globalThis.Record<PropertyKey, Validator<unknown>>
> implements Validator<
    RecursiveInferArgument<Container>,
    Value<RecursiveInferArgument<Container>> & Validatable & {validatable : Optional<Container>}
> {
    constructor(
        public validators : Container,
        public filter : FunctionSingle<Optional<Container>, Optional<Container>>,
        public stopInvalid : boolean
    ) {
    }

    validate(argument: RecursiveInferArgument<Container>) : Value<RecursiveInferArgument<Container>> & Validatable & {validatable : Optional<Container>} {

        let results : Optional<Container> = ValidatePartial(this.validators, argument, <any>this.stopInvalid);
        let filtered = this.filter(results);
        return  {
            validatable : filtered,
            value : argument,
            valid : And(<any>filtered)
        };

    }
}



