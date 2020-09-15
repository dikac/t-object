import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./base/record/infer";
import Map from "./map";
import ValidatableMapInterface from "../validatable/map";
import RecordBase from "./base/record/infer";
import RecordType from "./type/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Simple from "@dikac/t-validator/validatable/simple";
export default class MapCallback<Container extends Record<any, Validator> = Record<PropertyKey, Validator>, Result extends Record<any, Instance> = Record<PropertyKey, Instance>, ValidatableType extends Validatable = Validatable, MessageType = unknown> implements Map<Container, Result, ValidatableType, MessageType> {
    validators: Container;
    map: (record: RecordParameter<Container>, validators: Container) => Result;
    validation: (result: Result) => ValidatableType;
    message: (result: Result) => MessageType;
    constructor(validators: Container, map: (record: RecordParameter<Container>, validators: Container) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    validate<Argument extends RecordType<Container>>(argument: Argument): ValidatableReplace<ValidatableMapInterface<MessageType, Container, Result, ValidatableType, Argument>, true>;
    validate<Argument extends RecordBase<Container>>(argument: Argument): Simple<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapInterface<MessageType, Container, Result, ValidatableType, RecordBase<Container>>>;
}
