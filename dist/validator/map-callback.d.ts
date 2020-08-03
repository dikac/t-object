import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/base/record/infer";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableMapCallback from "../validatable/map-callback";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";
export interface MapCallbackInterface<Container extends Record<PropertyKey, Validator>, Result extends Record<PropertyKey, Instance<unknown>>, ValidatableT extends Validatable = Validatable, MessageT = unknown> extends Validator<RecordBase<Container>, RecordType<Container>, ValidatableMapCallback<MessageT, Container, Result, ValidatableT>>, Validators<Container>, Message<Function<[Result], MessageT>> {
    handler: Function<[RecordParameter<Container>, Container], Result>;
    validation: Function<[Result], ValidatableT>;
}
export default function MapCallback<Container extends Record<any, Validator> = Record<any, Validator>, Result extends Record<PropertyKey, Instance<unknown>> = Record<PropertyKey, Instance<unknown>>, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>): MapCallbackInterface<Container, Result, ValidatableT, MessageT>;
export declare class MapCallbackClass<Container extends Record<any, Validator> = Record<any, Validator>, Result extends Record<PropertyKey, Instance<unknown>> = Record<PropertyKey, Instance<unknown>>, ValidatableT extends Validatable = Validatable, MessageT = unknown> implements MapCallbackInterface<Container, Result, ValidatableT, MessageT> {
    validators: Container;
    handler: Function<[RecordParameter<Container>, Container], Result>;
    validation: Function<[Result], ValidatableT>;
    message: Function<[Result], MessageT>;
    constructor(validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
    validate<Argument extends RecordBase<Container>>(argument: Argument): Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, Result, ValidatableT>>;
}
