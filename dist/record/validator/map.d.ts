import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import RecordParameter from "./parameter/parameter";
import PartialUnion from "../../validator/validatable/record/partial-union";
export declare type ValidatorReturn<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface> = ValueInterface<RecordParameter<Container>> & ValidatableInterface & {
    validatables: PartialUnion<Container>;
} & {
    validatable: Validatable;
};
export default class Map<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Validatable>> {
    validators: Container;
    validation: Function<[PartialUnion<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[PartialUnion<Container>], Validatable>);
    validate(argument: RecordParameter<Container>): ValidatorReturn<Container, Validatable>;
}
