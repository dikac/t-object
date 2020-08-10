import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./base/record/infer";
import FunctionS from "@dikac/t-function/function-single";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/validatable";
import MapCallback, {Interface} from "./map-callback";

export default function MapCallbackFunction<
    Container extends Record<keyof Container, Validator> = Record<PropertyKey, Validator>,
    Result extends Record<keyof Result, Instance> = Record<PropertyKey, Instance>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> (
    validators : Container,
    map : Function<[RecordParameter<Container>, Container], Result>,
    validation : FunctionS<Result, ValidatableT>,
    message : FunctionS<Result, MessageT>
) : Interface <Container, Result, ValidatableT, MessageT> {

    return new MapCallback(validators, map, validation, message);
}





