import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/return/return";
import Typeof from "@dikac/t-type/validator/type-standard";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import PartialUnion from "../../../map-partial-union";

type Record<Schema extends globalThis.Record<keyof any, Validator>> = {
    [Key in keyof Schema]  : InferReturn<Schema[Key]>
};

export default Record;

//
//
// let opt : PartialUnion<globalThis.Record<PropertyKey, ValidatableInterface & Message>> = {}
//
// let rr : globalThis.Record<PropertyKey, ValidatableInterface & Message> = {
//     c : {
//         valid: true,
//         message: 'string'
//     }
// }
//
// let r : globalThis.Record<PropertyKey, Validator<any, ValidatableInterface & Message>> = {
//     c : Typeof("string")
// }
//
//
// let converted : Record<typeof r> = rr;
// opt = rr;
