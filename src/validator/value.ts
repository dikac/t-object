import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidateValue from "./return/record/value";
import ReturnInfer from "./return/record/infer";
import PartialUnion from "../partial-union";
import MapReturn from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";

export default class Value<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>,
    ValidatableT extends Validatable = Validatable
> implements Validator<
    BaseT,
    ValueT,
    ValidatableValueCallback<BaseT, MessageT, Container, PartialUnion<MapReturn<Container>>, ValidatableT>
> {
    constructor(
        public validators : Container,
        public validation : Function<[PartialUnion<ReturnInfer<Container>>], ValidatableT>,
        public message : Function<[PartialUnion<ReturnInfer<Container>>], MessageT>
    ) {
    }

    validate<Argument extends BaseT>(
        argument: Argument
    ) : Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, PartialUnion<MapReturn<Container>>, ValidatableT>> {

        let handler = (value, validators) => <PartialUnion<MapReturn<Container>>> ValidateValue(value, validators, true);

        return  new ValidatableValueCallback(
            argument,
            this.validators,
            handler,
            this.validation,
            this.message
        );
    }
}
