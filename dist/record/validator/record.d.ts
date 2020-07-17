import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../record";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/record/validatable";
import RecursiveInferArgument from "../../validator/parameter/record/parameter";
export default class Record<Container extends RecordObject<PropertyKey, Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, Value<RecursiveInferReturn<Container>> & Validatable> {
    validators: Container;
    constructor(validators: Container);
    validate(argument: RecursiveInferArgument<Container>): Value<RecursiveInferReturn<Container>> & Validatable;
}
