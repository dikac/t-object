import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidateValuePartial from "./return/record/value-partial";
import ReturnInfer from "./return/record/infer";
import PartialUnion from "../partial-union";
import Union from "../union";
import MapReturn from "./return/record/infer";
import Return from "@dikac/t-validator/validatable/simple";
import ValueCallback, {Interface} from "./value-callback";

export default function ValuePartial<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    Container extends Record<keyof Container, Validator<BaseT, ValueT>> = Record<PropertyKey, Validator<BaseT, ValueT>>,
    ValidatableT extends Validatable = Validatable
>(
    validators : Container,
    validation : Function<[Union<ReturnInfer<Container>>], ValidatableT>,
    message : Function<[Union<ReturnInfer<Container>>], MessageT>,
) : Interface<BaseT, ValueT, MessageT, Container, Union<MapReturn<Container>>, ValidatableT> {

    return new ValueCallback(
        validators,
        (value, validators)  => <Union<MapReturn<Container>>> ValidateValuePartial(value, validators),
        validation,
        message
    );
}
