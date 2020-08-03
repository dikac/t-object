import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableMapCallback from "../validatable/map-callback";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import PartialUnion from "../partial-union";
import ReturnInfer from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";
export interface MapInterface<RecordT extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableT extends Validatable = Validatable, MessageT = unknown> extends Validator<RecordBase<RecordT>, RecordBase<RecordT>, ValidatableMapCallback<MessageT, RecordT, PartialUnion<ReturnInfer<RecordT>>, ValidatableT>> {
    validators: RecordT;
    validation: Function<[PartialUnion<ReturnInfer<RecordT>>], ValidatableT>;
    message: Function<[PartialUnion<ReturnInfer<RecordT>>], MessageT>;
}
export default function Map<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: Container, validation: Function<[PartialUnion<ReturnInfer<Container>>], ValidatableT>, message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>): MapInterface<Container, ValidatableT, MessageT>;
export declare class MapClass<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableT extends Validatable = Validatable, MessageT = unknown> implements MapInterface<Container, ValidatableT, MessageT> {
    validators: Container;
    validation: Function<[PartialUnion<ReturnInfer<Container>>], ValidatableT>;
    message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>;
    constructor(validators: Container, validation: Function<[PartialUnion<ReturnInfer<Container>>], ValidatableT>, message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>);
    validate<Argument extends RecordBase<Container>>(argument: Argument): Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, PartialUnion<ReturnInfer<Container>>, ValidatableT>>;
}
