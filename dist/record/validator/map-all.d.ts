import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import RecordValidatable from "../../validator/validatable/record/record";
import RecordParameter from "./parameter/parameter";
export declare type ValidatorReturn<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface> = ValueInterface<RecordParameter<Container>> & ValidatableInterface & {
    validatables: RecordValidatable<Container>;
} & {
    validatable: Validatable;
};
export default class MapAll<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Validatable>> {
    validators: Container;
    validation: Function<[RecordValidatable<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[RecordValidatable<Container>], Validatable>);
    validate(argument: RecordParameter<Container>): ValidatorReturn<Container, Validatable>;
}
