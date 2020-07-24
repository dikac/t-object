import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
interface Va<Result, Validatable> {
    validatables: Result;
    validatable: Validatable;
}
export default class ValueCallback<Val = unknown, Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>, Result extends Record<PropertyKey, ValidatableInterface> = Record<PropertyKey, ValidatableInterface>, Validatable extends ValidatableInterface = ValidatableInterface> implements ValueInterface<Val>, ValidatableInterface, Va<Result, Validatable> {
    readonly value: Val;
    validators: Container;
    handler: Function<[Val, Container], Result>;
    validation: Function<[Result], Validatable>;
    readonly validatables: Result;
    readonly valid: boolean;
    readonly validatable: Validatable;
    constructor(value: Val, validators: Container, handler: Function<[Val, Container], Result>, validation: Function<[Result], Validatable>);
}
export {};
