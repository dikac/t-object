import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidateValue from "../../validator/validatable/record/value";
import PartialUnion from "../../validator/validatable/record/partial-union";

export type ValidatorReturn<
    Val,
    Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>,
    Validatable extends ValidatableInterface = ValidatableInterface
> = ValueInterface<Val> & ValidatableInterface & {validatables : PartialUnion<Container>} & {validatable : Validatable};

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
        public validation : Function<[PartialUnion<Container>], Validatable>
    ) {
    }

    validate(argument: Val) : ValidatorReturn<Val, Container, Validatable> {

        let handler = (value, validators) => <Record<PropertyKey, ValidatableInterface>> ValidateValue(value, validators, true);

        return <any>new ValidatableValueCallback(
            argument,
            this.validators,
            handler,
            <Function<[Record<PropertyKey, ValidatableInterface>], Validatable>> this.validation
        );
    }
}
