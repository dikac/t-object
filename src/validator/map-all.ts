import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map";
import MapCallback from "./map-callback";
import Map from "./map";



export default function MapAll<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Container,
    validation : (result:ReturnInfer<Container>)=>ValidatableType,
    message : (result:ReturnInfer<Container>)=>MessageType,
) : Map<Container, ReturnInfer<Container>, ValidatableType, MessageType> {

    return <Map<Container, ReturnInfer<Container>, ValidatableType, MessageType>> new MapCallback(validators, (record, validators1) => {

        return ValidateMap(record, validators1);

    }, validation, message);
}

