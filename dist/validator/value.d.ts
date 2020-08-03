import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import ReturnInfer from "./return/record/infer";
import PartialUnion from "../partial-union";
import MapReturn from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";
export default class Value<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, ValidatableT extends Validatable = Validatable> implements Validator<BaseT, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, PartialUnion<MapReturn<Container>>, ValidatableT>> {
    validators: Container;
    validation: Function<[PartialUnion<ReturnInfer<Container>>], ValidatableT>;
    message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>;
    constructor(validators: Container, validation: Function<[PartialUnion<ReturnInfer<Container>>], ValidatableT>, message: Function<[PartialUnion<ReturnInfer<Container>>], MessageT>);
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, PartialUnion<MapReturn<Container>>, ValidatableT>>;
}
