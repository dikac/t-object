import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../record/record";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "./record/infer/return";
import RecursiveInferArgument from "./record/infer/argument";
export default class Record<Container extends RecordObject<PropertyKey, Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, Value<RecursiveInferReturn<Container>> & Validatable> {
    validators: Container;
    constructor(validators: Container);
    validate(value: RecursiveInferArgument<Container>): Value<RecursiveInferReturn<Container>> & Validatable;
}
