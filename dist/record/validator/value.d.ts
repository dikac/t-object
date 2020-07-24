import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import PartialUnion from "../../validator/validatable/record/partial-union";
export declare type ValidatorReturn<Val, Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>, Validatable extends ValidatableInterface = ValidatableInterface> = ValueInterface<Val> & ValidatableInterface & {
    validatables: PartialUnion<Container>;
} & {
    validatable: Validatable;
};
export default class ValueCallback<Val = unknown, Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<Val, ValidatorReturn<Val, Container, Validatable>> {
    validators: Container;
    validation: Function<[PartialUnion<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[PartialUnion<Container>], Validatable>);
    validate(argument: Val): ValidatorReturn<Val, Container, Validatable>;
}
