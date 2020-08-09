// import RecordCallback from "../../dist/validator/record-callback";
// import ValidateValue from "../../dist/validator/return/record/record";
// import And from "../../dist/validatable/and";
// import Or from "../../dist/validatable/or";
// import Validatable from "@dikac/t-validatable/validatable";
// import ValidatorInterface from "@dikac/t-validator/validator";
// import Message from "@dikac/t-message/message";
// import MessageMap from "../../dist/message/message/record/map";
// import Type from "@dikac/t-type/validator/type-standard";
// import Instance from "@dikac/t-validator/parameter/instance/instance";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe("compiler compatibility", function() {
//
//
//
//     type TypeValidatorValue = ValidatorInterface<any, number, Instance<any, string>>;
//     type TypeValidatorKey = ValidatorInterface<any, string, Instance<any, string>>;
//
//     let v = Type("number");
//     let k = Type("string");
//
//     type Type = {
//         name : string,
//         address : string,
//     }
//
//     let value = {
//         name : 'name',
//         address : 'address',
//     };
//
//     describe("implicit", function() {
//
//         let property = new RecordCallback(v, k,
//             (value, v, k) => ValidateValue(value, v, k, false),
//             And,
//             (v)=>MessageMap(v)
//         );
//
//
//         let validatable = property.validate(value);
//
//         if(validatable.valid) {
//
//             let string : Type = validatable.value;
//
//         } else {
//
//             let unknown : unknown = validatable.value;
//         }
//
//     });
//     //
//     // describe("explicit complete", function() {
//     //
//     //     describe("auto", function() {
//     //
//     //         let property = MapCallback<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>>(validator,
//     //             (value, validators) => ValidateValue(value, validators, false),
//     //             (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
//     //             MessageMap
//     //         );
//     //
//     //         let validatable = property.validate(value);
//     //
//     //         let unknown : unknown = validatable.value;
//     //         let record : Type = validatable.value;
//     //
//     //     });
//     //
//     //     describe("direct", function() {
//     //
//     //         let property = MapCallback<TypeValidator>(validator,
//     //             (value, validators) => ValidateValue(value, validators, false),
//     //             (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
//     //             MessageMap
//     //         );
//     //
//     //         let validatable = property.validate(value);
//     //
//     //         let unknown : unknown = validatable.value;
//     //         let record : Type = validatable.value;
//     //
//     //     });
//     // });
//     //
//     // describe("implicit partial", function() {
//     //
//     //     let property = MapCallback(validator,
//     //         (value, validators) =>
//     //             <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
//     //         (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
//     //         MessageMap
//     //     );
//     //
//     //     let validatable = property.validate(value);
//     //
//     //     let unknown : unknown = validatable.value;
//     //     let val : Type = validatable.value;
//     //
//     // });
//     //
//     // describe("explicit complete", function() {
//     //
//     //     describe("auto", function() {
//     //
//     //         let property = MapCallback<globalThis.Record<keyof typeof validator, ValidatorInterface<any, string, Instance<any, string>>>>(
//     //             validator,
//     //             (value, validators) =>
//     //                 <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
//     //             (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
//     //             MessageMap
//     //         );
//     //
//     //         let validatable = property.validate(value);
//     //
//     //         let unknown : unknown = validatable.value;
//     //         let string : Type = validatable.value;
//     //
//     //     });
//     //
//     //     describe("direct", function() {
//     //
//     //         let property = MapCallback<TypeValidator>(
//     //             validator,
//     //             (value, validators) =>
//     //                 <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
//     //             (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
//     //             (v)=>MessageMap(<globalThis.Record<any, Message>>v)
//     //         );
//     //
//     //         let validatable = property.validate(value);
//     //
//     //         let unknown : unknown = validatable.value;
//     //         let string : Type = validatable.value;
//     //
//     //     });
//     // });
// });
