// import RecordValueCallback from "../../dist/validator/record-value-callback";
// import ValidateValue from "../../dist/validator/return/record/record-value";
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
//     type TypeValidatorValue = ValidatorInterface<any, number, Instance<any, string>>;
//
//     let v = Type("number");
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
//         let property = new RecordValueCallback(v,
//             (value, v) => ValidateValue(value, v, false),
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
//
//
// let value = {
//     name : 'name',
//     // address : 1,
//     // addressc : true,
// };
//
// let ivalue = {
//     name : 1,
//     // address : 1,
//     // addressc : true,
// };
//
// type V = {
//     name : string,
//     // address : 1,
//     // addressc : true,
// };
//
// type IV = {
//     name : number,
//     // addressc : true,
// };
//
// type Typed<
//     Base extends Record<PropertyKey, unknown>,
//     Type extends Record<PropertyKey, unknown>
// > = Type extends Base ? Type : unknown;
//
// function cc<
//     T extends Record<PropertyKey, unknown>,
//     O extends Record<PropertyKey, unknown>
//     >(c : O) : Typed<T, O> {
//
//     return <Typed<T, O> >  c;
// }
//
// let a  = cc<Record<string, string>, V>(value);
// let b  = cc<Record<string, string>, IV>(ivalue);
//
//
