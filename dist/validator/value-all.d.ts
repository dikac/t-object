import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import MapReturn from "./return/record/record";
export default class ValueCallback<Val = unknown, MessageT = unknown, Container extends Record<any, Validator<Val>> = Record<any, Validator<Val>>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<Val, ValidatableValueCallback<Val, MessageT, Container, MapReturn<Container>, Validatable>> {
    validators: Container;
    validation: Function<[MapReturn<Container>], Validatable>;
    message: Function<[MapReturn<Container>], MessageT>;
    constructor(validators: Container, validation: Function<[MapReturn<Container>], Validatable>, message: Function<[MapReturn<Container>], MessageT>);
    validate(argument: Val): ValidatableValueCallback<Val, MessageT, Container, MapReturn<Container>, Validatable>;
}
