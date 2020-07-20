import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/record/record";
import RecursiveInferArgument from "./parameter/parameter";
export default class Record<Container extends globalThis.Record<PropertyKey, Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, Value<RecursiveInferArgument<Container>> & Validatable & {
    validatable: RecursiveInferReturn<Container>;
}> {
    validators: Container;
    constructor(validators: Container);
    validate(argument: RecursiveInferArgument<Container>): Value<RecursiveInferArgument<Container>> & Validatable & {
        validatable: RecursiveInferReturn<Container>;
    };
}
