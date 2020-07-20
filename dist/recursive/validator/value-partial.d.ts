import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Optional from "../../validator/validatable/recursive/optional";
export default class ValuePartial<Val, Container extends Record<PropertyKey, Validator<Val>>> implements Validator<Val, ValueInterface<Val> & Validatable & {
    validation: Optional<Container>;
}> {
    validators: Container;
    constructor(validators: Container);
    validate(argument: Val): {
        validation: Optional<Container>;
    } & ValueInterface<Val> & Validatable;
}
