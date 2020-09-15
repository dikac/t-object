import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map-partial";
import MapCallback from "./map-callback";
import Map from "./map";
import Union from "../union";

export default function MapPartial<
    Container extends Record<any, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Container,
    validation : (result:Union<ReturnInfer<Container>>)=>ValidatableType,
    message : (result:Union<ReturnInfer<Container>>)=>MessageType,
) : Omit<Map<Container, Union<ReturnInfer<Container>>, ValidatableType, MessageType>, 'map'> {

    return <Omit<Map<Container, Union<ReturnInfer<Container>>, ValidatableType, MessageType>, 'map'>> new MapCallback(
        validators,
        (value, validators) => <Union<ReturnInfer<Container>>>ValidateMap(value, validators),
        validation,
        message
    );
}

