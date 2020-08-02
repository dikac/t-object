import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import MapReturn from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<BaseT, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, MapReturn<Container>, Validatable>> {
    validators: Container;
    validation: Function<[MapReturn<Container>], Validatable>;
    message: Function<[MapReturn<Container>], MessageT>;
    constructor(validators: Container, validation: Function<[MapReturn<Container>], Validatable>, message: Function<[MapReturn<Container>], MessageT>);
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, MapReturn<Container>, Validatable>>;
}
