import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import RecursiveInferArgument from "./parameter/parameter";
export default class Record<Container extends RecordObject<PropertyKey, Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, Value<RecursiveInferArgument<Container>> & Validatable & {
    validatable: RecursiveInferReturn<Container>;
}> {
    validators: Container;
    constructor(validators: Container);
    validate(argument: RecursiveInferArgument<Container>): Value<RecursiveInferArgument<Container>> & Validatable & {
        validatable: RecursiveInferReturn<Container>;
    };
}
