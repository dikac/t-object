import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map";
import MapCallback from "./map-callback";
import Map from "./map";



export default function MapAll<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown
>(
    validators : Container,
    validation : (result:ReturnInfer<Container>)=>ValidatableT,
    message : (result:ReturnInfer<Container>)=>MessageT,
) : Map<Container, ReturnInfer<Container>, ValidatableT, MessageT> {

    return <Map<Container, ReturnInfer<Container>, ValidatableT, MessageT>> new MapCallback(validators, ValidateMap, validation, message);
}

