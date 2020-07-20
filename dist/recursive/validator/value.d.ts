import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import ValueInterface from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
export default class Value<Val, Container extends RecordObject<PropertyKey, Validator<Val>>> implements Validator<Val, ValueInterface<Val> & Validatable & {
    validation: RecursiveInferReturn<Container>;
}> {
    validators: Container;
    constructor(validators: Container);
    validate(argument: Val): {
        validation: RecursiveInferReturn<Container>;
    } & ValueInterface<Val> & Validatable;
}
