import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidateValue from "./return/record/value";
import ReturnInfer from "./return/record/infer";
import PartialUnion from "../partial-union";
import Union from "../union";
import MapReturn from "./return/record/infer";
import Return from "@dikac/t-validator/validatable/simple";
import ValueCallback, {Interface} from "./value-callback";

export default function Value<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>,
    ValidatableT extends Validatable = Validatable
>(
    validators : Container,
    validation : Function<[MapReturn<Container>], ValidatableT>,
    message : Function<[MapReturn<Container>], MessageT>,

) : Interface<BaseT, ValueT, MessageT, Container, MapReturn<Container>, ValidatableT> {

    return new ValueCallback(
        validators,
        ValidateValue,
        validation,
        message
    );
}
