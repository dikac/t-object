import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import Value from "@dikac/t-value/value";
import RecursiveInferArgument from "./parameter/parameter";
import FunctionSingle from "@dikac/t-function/function-single";
import Optional from "../../validator/validatable/recursive/optional";
export default class Filtered<Container extends RecordObject<PropertyKey, Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, Value<RecursiveInferArgument<Container>> & Validatable & {
    validatable: Optional<Container>;
}> {
    validators: Container;
    filter: FunctionSingle<Optional<Container>, Optional<Container>>;
    stopInvalid: boolean;
    constructor(validators: Container, filter: FunctionSingle<Optional<Container>, Optional<Container>>, stopInvalid: boolean);
    validate(argument: RecursiveInferArgument<Container>): Value<RecursiveInferArgument<Container>> & Validatable & {
        validatable: Optional<Container>;
    };
}
