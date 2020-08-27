import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import MapCallback, {Interface} from "./map-callback";

export default function MapCallbackFunction<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Record<PropertyKey, Instance> = Record<PropertyKey, Instance>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> (
    validators : Container,
    map : (argument:RecordParameter<Container>, validators:Container)=>Result,
    validation : (result:Result)=>ValidatableT,
    message : (result:Result)=>MessageT
) : Interface <Container, Result, ValidatableT, MessageT> {

    return new MapCallback(validators, map, validation, message);
}





