import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import RecordValidatable from "../../validator/validatable/record/record";
import OptionalValidatable from "../../validator/validatable/record/partial";
export declare type ValidationReturn<Val, Container extends Record<PropertyKey, Validator<Val>>> = RecordValidatable<Container> | OptionalValidatable<Container>;
export declare type ValidatorReturn<Val, Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>, Result extends Record<PropertyKey, ValidatableInterface> = Record<PropertyKey, ValidatableInterface>, Validatable extends ValidatableInterface = ValidatableInterface> = ValueInterface<Val> & ValidatableInterface & {
    validatables: Result;
} & {
    validatable: Validatable;
};
export default class ValueCallbackz<Val = unknown, Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>, Result extends Record<PropertyKey, ValidatableInterface> = Record<PropertyKey, ValidatableInterface>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<Val, ValidatorReturn<Val, Container, Result, Validatable>> {
    validators: Container;
    handler: Function<[Val, Container], Result>;
    validation: Function<[Result], Validatable>;
    constructor(validators: Container, handler: Function<[Val, Container], Result>, validation: Function<[Result], Validatable>);
    validate(argument: Val): ValidatorReturn<Val, Container, Result, Validatable>;
}
