import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../record/record";
import ValueInterface from "@dikac/t-value/value";
import RecursiveInferReturn from "./record/infer/return";
export default class Value<Val, Container extends RecordObject<PropertyKey, Validator<Val>>> implements Validator<Val, ValueInterface<RecursiveInferReturn<Container>> & Validatable> {
    validators: Container;
    constructor(validators: Container);
    validate(value: Val): ValueInterface<RecursiveInferReturn<Container>> & Validatable;
}
