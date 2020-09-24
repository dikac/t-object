import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map";
import MapCallback from "./map-callback";
import Map from "./map";

export default function MapAll<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:ReturnInfer<Validators>)=>ValidatableType,
    message : (result:ReturnInfer<Validators>)=>MessageType,
) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return <Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>> new MapCallback(validators, (record, validators1) => {

        return ValidateMap(record, validators1);

    }, validation, message);
}

