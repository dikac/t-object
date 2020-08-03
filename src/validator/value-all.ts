import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidateValue from "./return/record/value";
import ValidatableValueCallback from "../validatable/value-callback";
import MapReturn from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";


export default class ValueAll<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>,
    ValidatableT extends Validatable = Validatable
> implements Validator<
    BaseT,
    ValueT,
    ValidatableValueCallback<BaseT, MessageT, Container, MapReturn<Container>, ValidatableT>
> {
    constructor(
        public validators : Container,
        public validation : Function<[MapReturn<Container>], ValidatableT>,
        public message : Function<[MapReturn<Container>], MessageT>
    ) {
    }

    validate<Argument extends BaseT>(argument: Argument) : Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, MapReturn<Container>, ValidatableT>> {

        let handler = (value, validators) => ValidateValue(value, validators, false);

        return new ValidatableValueCallback(argument, this.validators, handler, this.validation, this.message);
    }
}

