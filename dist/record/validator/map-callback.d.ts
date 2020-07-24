import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/parameter";
import RecordValidatable from "../../validator/validatable/record/record";
import OptionalInferReturn from "../../validator/validatable/record/partial";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "../validators/validators";
export declare type ValidationReturn<Container extends globalThis.Record<PropertyKey, Validator<RecordParameter<Container>>>> = RecordValidatable<Container> | OptionalInferReturn<Container>;
export declare type ValidatorReturn<Container extends globalThis.Record<PropertyKey, Validator<RecordParameter<Container>>>, Result extends ValidationReturn<Container>, Validatable extends ValidatableInterface> = ValueInterface<RecordParameter<Container>> & ValidatableInterface & {
    validatables: Result;
} & {
    validatable: Validatable;
};
export default class MapCallback<Container extends globalThis.Record<PropertyKey, Validator> = globalThis.Record<PropertyKey, Validator>, Result extends ValidationReturn<Container> = ValidationReturn<Container>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Result, Validatable>>, Validators<Container> {
    validators: Container;
    handler: Function<[RecordParameter<Container>, Container], Result>;
    validation: Function<[Result], Validatable>;
    constructor(validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], Validatable>);
    validate(argument: RecordParameter<Container>): ValidatorReturn<Container, Result, Validatable>;
}
