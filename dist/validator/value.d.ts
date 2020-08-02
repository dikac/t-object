import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import ReturnInfer from "./return/record/infer";
import PartialUnion from "../partial-union";
import MapReturn from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";
interface ValueInterface<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, Validatable extends ValidatableInterface = ValidatableInterface> extends Validator<BaseT, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, PartialUnion<MapReturn<Container>>, Validatable>> {
    validators: Container;
    validation: Function<[PartialUnion<ReturnInfer<Container>>], Validatable>;
    message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>;
}
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, Validatable extends ValidatableInterface = ValidatableInterface> implements ValueInterface<BaseT, ValueT, MessageT, Container, Validatable> {
    validators: Container;
    validation: Function<[PartialUnion<ReturnInfer<Container>>], Validatable>;
    message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>;
    constructor(validators: Container, validation: Function<[PartialUnion<ReturnInfer<Container>>], Validatable>, message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>);
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, PartialUnion<MapReturn<Container>>, Validatable>>;
}
export {};
