import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "./return/record/infer";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "./return/record/map";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import Return from "@dikac/t-validator/validatable/simple";
import MapCallback from "./map-callback";
import {Interface} from "./map-callback";
import PartialUnion from "../partial-union";
import Omit from "../omit";
//import Infer from "./return/record/infer";
import InferReturn from "@dikac/t-validator/validatable/infer";

// type ReturnInfer<Schema extends Record<any, Validator>> = {
//     [Key in keyof Schema]  : InferReturn<Schema[Key]>
// };

export default function Map<
    Container extends Record<any, Validator> = Record<PropertyKey, Validator>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown
>(
    validators : Container,
    validation : Function<[ReturnInfer<Container>], ValidatableT>,
    message : Function<[ReturnInfer<Container>], MessageT>,
) : Interface<Container, ReturnInfer<Container>, ValidatableT, MessageT> {

    return <Interface<Container, ReturnInfer<Container>, ValidatableT, MessageT>> new MapCallback(validators, ValidateMap, validation, message);
}

