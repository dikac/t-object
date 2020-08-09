// import ValidatorType from "@dikac/t-validator/boolean/validator";
// import ValidatableRecord from "./infer";
// import TypeObject from "../../../boolean/object";
// import ThrowableValue from "../../../validatable/record/assert/throwable/value";
// import Validator from "@dikac/t-validator/validator";
// import PartialUnion from "../../../partial-union";
// import MapInterface from "../../../map";
// import Map from "../../map";
// import InferReturn from "@dikac/t-validator/return/infer";
// import InferType from "@dikac/t-validator/parameter/type/infer";
// import BaseType from "@dikac/t-validator/parameter/base/infer";
// import TypeInfer from "@dikac/t-validator/parameter/type/infer";
// import {O} from "ts-toolbelt";
// import And from "../../../validatable/and";
// import Validatable from "@dikac/t-validatable/validatable";
// import MessageMap from "../../../message/message/record/map";
// import InferMessageMap from "../../../message/message/record/infer";
// import ReturnConstruct from "@dikac/t-validator/return/return";
// import Instance from "@dikac/t-validator/parameter/instance/instance";
// import MessageInfer from "@dikac/t-message/message/infer";
// import RecordBaseInfer from "../../parameter/base/record/infer";
// import RecordTypeInfer from "../../parameter/type/record/infer";
// import RecordReturnInfer from "../../return/record/infer";
// import RecordBase from "../../parameter/base/record/infer";
// import RecordType from "../../parameter/type/record/infer";
// import ValidatableMapCallback from "../../../validatable/map-callback";
// import ReturnInfer from "./infer";
// import Return from "@dikac/t-validator/return/return";
//
// export type Returnz<
//     Record extends globalThis.Record<PropertyKey, Validator>,
//     > =
//     ReturnConstruct<
//         RecordBaseInfer<Record>,
//         RecordBaseInfer<Record>,
//         RecordTypeInfer<Record>,
//         Return<
//             RecordBase<Record>,
//             RecordBase<Record>,
//             RecordType<Record>,
//             ValidatableMapCallback<
//                 InferMessageMap<RecordReturnInfer<Record>>,
//                 Record,
//                 ReturnInfer<Record>,
//                 Validatable
//             >
//         >
//     >;
//
// export type Pair<
//     Value extends Validator,
//     Key extends Validator
// > = Returnz<{value:Value, key:Key}>;
//
// //
// // {
// //     value : InferReturn<Value>,
// //     key : InferReturn<Key>
// // }
//
//
//
// export default function Record<
//     RecordT extends Record<PropertyKey, any>,
//     Value extends Validator<O.UnionOf<RecordT>>,
//     Key extends Validator<PropertyKey>,
// >(
//     object : RecordT,
//     value : Value,
//     key : Key,
//     stopOnInvalid : true
// ) : PartialUnion<MapInterface<RecordT, Pair<Value, Key>>>
//
// export default function Record<
//     RecordT extends Record<PropertyKey, any>,
//     Value extends Validator<O.UnionOf<RecordT>>,
//     Key extends Validator<PropertyKey>,
//     >(
//     object : RecordT,
//     value : Value,
//     key : Key,
//     stopOnInvalid : false
// ) : MapInterface<RecordT, Pair<Value, Key>>
//
// export default function Record<
//     RecordT extends Record<PropertyKey, any>,
//     Value extends Validator<O.UnionOf<RecordT>>,
//     Key extends Validator<PropertyKey>,
// >(
//     object : RecordT,
//     value : Value,
//     key : Key,
//     stopOnInvalid = true
// ) : PartialUnion<MapInterface<RecordT, Pair<Value, Key>>> | MapInterface<RecordT, Pair<Value, Key>> {
//
//     let result = {};
//
//     let validator = {
//         key : key,
//         value : value
//     };
//     let property = Map(validator, And, MessageMap);
//
//     for(let [k, v] of Object.entries(object)) {
//
//         const pair = property.validate({
//             key : <InferType<Key>>k,
//             value : <InferType<Value>>v
//         });
//
//         result[k] = pair
//
//         if(stopOnInvalid && !pair.valid) {
//
//             return result;
//         }
//     }
//
//     return  result;
// }
// //
// //
// // export default function Record<
// //     RecordT extends Record<InferType<Key>, InferType<Value>>,
// //     Value extends Validator,
// //     Key extends Validator<PropertyKey, PropertyKey>,
// // >(
// //     object : RecordT,
// //     value : Value,
// //     key : Key,
// //     stopOnInvalid : true
// // ) : PartialUnion<MapInterface<RecordT, Pair<Value, Key>>>
// //
// // export default function Record<
// //     RecordT extends Record<InferType<Key>, InferType<Value>>,
// //     Value extends Validator,
// //     Key extends Validator<PropertyKey, PropertyKey>,
// //     >(
// //     object : RecordT,
// //     value : Value,
// //     key : Key,
// //     stopOnInvalid : false
// // ) : MapInterface<RecordT, Pair<Value, Key>>
// //
// // export default function Record<
// //     RecordT extends Record<InferType<Key>, InferType<Value>>,
// //     Value extends Validator,
// //     Key extends Validator<PropertyKey, PropertyKey>,
// // >(
// //     object : RecordT,
// //     value : Value,
// //     key : Key,
// //     stopOnInvalid = true
// // ) : PartialUnion<MapInterface<RecordT, Pair<Value, Key>>> | MapInterface<RecordT, Pair<Value, Key>> {
// //
// //     let result = {};
// //
// //     let validator = {
// //         key : key,
// //         value : value
// //     };
// //     let property = Map(validator, And, MessageMap);
// //
// //     for(let [k, v] of Object.entries(object)) {
// //
// //         const pair = property.validate({
// //             key : <InferType<Key>>k,
// //             value : <InferType<Value>>v
// //         });
// //
// //         result[k] = pair
// //
// //         if(stopOnInvalid && !pair.valid) {
// //
// //             return result;
// //         }
// //     }
// //
// //     return  result;
// // }
