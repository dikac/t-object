import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import RecordValidatable from "../../validator/validatable/record/record";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidateValue from "../../validator/validatable/record/value";

export type ValidatorReturn<
    Val,
    Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>,
    Validatable extends ValidatableInterface = ValidatableInterface
> = ValueInterface<Val> & ValidatableInterface & {validatables : RecordValidatable<Container>} & {validatable : Validatable};

export default class ValueCallback<
    Val = unknown,
    Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>,
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    Val,
    ValidatorReturn<Val, Container, Validatable>
> {
    constructor(
        public validators : Container,
        public validation : Function<[RecordValidatable<Container>], Validatable>
    ) {
    }

    validate(argument: Val) : ValidatorReturn<Val, Container, Validatable> {

        let handler = (value, validators) => ValidateValue(value, validators, false);

        return new ValidatableValueCallback(argument, this.validators, handler, this.validation);
    }
}
