// import CallValidator from "../../../../dist/validator/return/record/standard";
// import Type from "@dikac/t-type/validator/type-standard";
// import Record from "../../../../dist/validator/return/record/record-value";
// import Validator from "@dikac/t-validator/validator";
//
// it("force console log", () => spyOn(console, 'log').and.callThrough());
//
// describe("compiler compatibility", function() {
//
//     describe("explicit valid", function() {
//
//         type ValueValidator = Validator<any, number>;
//
//         type Value = {
//             validator1 : number,
//             validator2 : number,
//         };
//
//         let value : ValueValidator = Type("number");
//
//         let record : Value = {
//             validator1 : 10,
//             validator2 : 10,
//         };
//
//         Record<Value, ValueValidator>(record, value, false);
//     });
//
//     describe("implicit", function() {
//
//         let value = Type("number");
//
//         let record = {
//             validator1 : 10,
//             validator2 : 10,
//         };
//
//         Record(record, value, false);
//     });
//
//     describe("auto", function() {
//
//         let value = Type("number");
//
//         let record = {
//             validator1 : 10,
//             validator2 : 10,
//         };
//
//         Record<typeof record, typeof value>(record, value, false);
//     });
// });
