import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/record/value";
import MapReturn from "./validatable/record/infer";
import ValueCallback, {Interface} from "./value-callback";

export default function Value<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>,
    ValidatableT extends Validatable = Validatable
>(
    validators : Container,
    validation : (result:MapReturn<Container>) => ValidatableT,
    message : (result:MapReturn<Container>) => MessageT,

) : Interface<BaseT, ValueT, MessageT, Container, MapReturn<Container>, ValidatableT> {

    return new ValueCallback(
        validators,
        ValidateValue,
        validation,
        message
    ) as Interface<BaseT, ValueT, MessageT, Container, MapReturn<Container>, ValidatableT>;
}
