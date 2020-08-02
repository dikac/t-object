import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableMapCallback from "../validatable/map-callback";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import PartialUnion from "../partial-union";
import ReturnInfer from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";
interface MapInterface<RecordT extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface, MessageT = unknown> extends Validator<RecordBase<RecordT>, RecordBase<RecordT>, ValidatableMapCallback<MessageT, RecordT, PartialUnion<ReturnInfer<RecordT>>, Validatable>> {
    validators: RecordT;
    validation: Function<[PartialUnion<ReturnInfer<RecordT>>], Validatable>;
    message: Function<[PartialUnion<ReturnInfer<RecordT>>], MessageT>;
}
export default function Map<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface, MessageT = unknown>(validators: Container, validation: Function<[PartialUnion<ReturnInfer<Container>>], Validatable>, message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>): MapInterface<Container, Validatable, MessageT>;
export declare class MapClass<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Validatable extends ValidatableInterface = ValidatableInterface, MessageT = unknown> implements MapInterface<Container, Validatable, MessageT> {
    validators: Container;
    validation: Function<[PartialUnion<ReturnInfer<Container>>], Validatable>;
    message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>;
    constructor(validators: Container, validation: Function<[PartialUnion<ReturnInfer<Container>>], Validatable>, message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>);
    validate<Argument extends RecordBase<Container>>(argument: Argument): Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, PartialUnion<ReturnInfer<Container>>, Validatable>>;
}
export {};
