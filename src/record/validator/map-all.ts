import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import RecordValidatable from "../../validator/validatable/record/record";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "../../validator/validatable/record/standard";
import RecordParameter from "./parameter/parameter";

export type ValidatorReturn<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface
> = ValueInterface<RecordParameter<Container>> &
    ValidatableInterface &
    {validatables : RecordValidatable<Container>} &
    {validatable : Validatable};

export default class MapAll<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    RecordParameter<Container>,
    ValidatorReturn<Container, Validatable>
> {
    constructor(
        public validators : Container,
        public validation : Function<[RecordValidatable<Container>], Validatable>
    ) {
    }

    validate(argument: RecordParameter<Container>) : ValidatorReturn<Container, Validatable> {

        let handler = (value, validators) => ValidateMap(value, validators, false);

        return new ValidatableMapCallback(argument, this.validators, handler, this.validation);
    }
}
