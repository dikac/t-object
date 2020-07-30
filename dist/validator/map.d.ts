import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import RecordParameter from "./parameter/record/record";
import PartialUnion from "./return/record/partial-union";
export declare type ValidatorReturn<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface> = ValueInterface<RecordParameter<Container>> & ValidatableInterface & {
    validatables: PartialUnion<Container>;
} & {
    validatable: Validatable;
};
