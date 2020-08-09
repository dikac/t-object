import ValidatorSimple from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "./return/record/infer";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "./return/record/map-partial";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import Return from "@dikac/t-validator/validatable/simple";
import MapCallback from "./map-callback";
import {Interface} from "./map-callback";
import PartialUnion from "../partial-union";
import Union from "../union";

export default function MapPartial<
    Container extends Record<any, Validator> = Record<PropertyKey, Validator>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown
>(
    validators : Container,
    validation : Function<[Union<ReturnInfer<Container>>], ValidatableT>,
    message : Function<[Union<ReturnInfer<Container>>], MessageT>,
) : Omit<Interface<Container, Union<ReturnInfer<Container>>, ValidatableT, MessageT>, 'map'> {

    return new MapCallback(
        validators,
        (value, validators) => <Union<ReturnInfer<Container>>>ValidateMap(value, validators),
        validation,
        message
    );
}

