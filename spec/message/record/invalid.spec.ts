// import Type from "@dikac/t-type/validator/type-standard";
// import ValueAll from "../../../dist/validator/value-all";
// import ValueCallback from "../../../dist/validator/value-callback";
// import MapAll from "../../../dist/validator/map-all";
// import MapCallback from "../../../dist/validator/map-callback";
// import Value from "../../../dist/validator/value";
// import Map from "../../../dist/validator/map";
// import And from "../../../dist/validatable/and";
// import Invalid from "../../../dist/message/message/record/invalid";
// import MessageMap from "../../../dist/message/message/record/map";
// import ValidatorValidatable from "../../../dist/validator/return/record/infer";
// import ValidateValue from "../../../dist/validator/return/record/value";
// import ValidateMap from "../../../dist/validator/return/record/map";
// import Instance from "@dikac/t-validator/parameter/instance/instance";
//
// it("force console log", () => {spyOn(console, 'log').and.callThrough();});
//
//
// describe("value all", function() {
//
//     let validator = {
//         name: Type('string'),
//         address: Type('string'),
//         user: Type('string'),
//         info: new ValueAll({
//             age: Type('string'),
//             hobby: Type('string'),
//             no: Type('string'),
//         }, (v) => And(v), Invalid)
//     };
//     let property = new ValueAll(validator, (v)=>And(v), Invalid);
// });
//
//
// describe("value partial", function() {
//
//     let validator = {
//         name: Type('string'),
//         address: Type('string'),
//         user: Type('string'),
//         info: new Value({
//             age: Type('string'),
//             hobby: Type('string'),
//             no: Type('string'),
//         }, (v) => And(v), Invalid)
//     };
//     let property = new Value(validator, (v)=>And(v), Invalid);
// });
//
//
// describe("value callback", function() {
//
//     let validator = {
//         name : Type('string'),
//         address : Type('string'),
//         user : Type('string'),
//         info : new ValueCallback({
//                 age : Type('string'),
//                 hobby : Type('string'),
//                 no : Type('string'),
//             }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
//             And,
//             Invalid
//         )
//     };
//
//     let property = new ValueCallback(validator,
//         (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
//         And,
//         Invalid
//     );
// });
//
//
// describe("value all", function() {
//
//     let validator = {
//         name: Type('string'),
//         address: Type('string'),
//         user: Type('string'),
//         info: MapAll({
//             age: Type('string'),
//             hobby: Type('string'),
//             no: Type('string'),
//         }, (v) => And(v), Invalid)
//     };
//     let property = MapAll(validator, (v)=>And(v), Invalid);
// });
//
//
// describe("value partial", function() {
//
//     let validator = {
//         name: Type('string'),
//         address: Type('string'),
//         user: Type('string'),
//         info: Map({
//             age: Type('string'),
//             hobby: Type('string'),
//             no: Type('string'),
//         }, (v) => And(v), Invalid)
//     };
//     let property = Map(validator, (v)=>And(v), Invalid);
// });
//
//
// describe("value callback", function() {
//
//     let validator = {
//         name : Type('string'),
//         age : Type('number'),
//         address : Type('string'),
//         info : MapCallback({
//                 age : Type('number'),
//                 hobby : Type('string'),
//                 no : Type('number')
//             },
//             (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMap(value, validators, true),
//             And, MessageMap)
//     };
//
//     let value = {
//         name : 'name',
//         age : "15",
//         address : 'address',
//         info : {
//             age : 5,
//             hobby : 'string',
//             no : 6,
//         }
//     };
//
//     let property = MapCallback(validator,
//         (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMap(value, validators, true),
//         And,
//         MessageMap
//     );
// });
