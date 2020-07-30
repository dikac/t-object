import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import MapPartialUnion from "../map-partial-union";
import RecordParameter from "../validator/parameter/record/record";
export default class ValueCallback<MessageT = unknown, Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends MapPartialUnion<globalThis.Record<PropertyKey, ValidatableInterface & Message>> = MapPartialUnion<globalThis.Record<PropertyKey, ValidatableInterface & Message>>, Validatable extends ValidatableInterface = ValidatableInterface> implements ValueInterface<RecordParameter<Container>>, ValidatableInterface, Validatables<Result> {
    readonly value: RecordParameter<Container>;
    validators: Container;
    handler: Function<[RecordParameter<Container>, Container], Result>;
    validation: Function<[Result], Validatable>;
    readonly validatables: Result;
    readonly valid: boolean;
    readonly validatable: Validatable;
    readonly message: MessageT;
    readonly messages: Result;
    constructor(value: RecordParameter<Container>, validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], Validatable>, message: Function<[Result], MessageT>);
}
