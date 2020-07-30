(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//
// export default class Map<
//     Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Validatable extends ValidatableInterface = ValidatableInterface
// > implements Validator<
//     RecordParameter<Container>,
//     ValidatorReturn<Container, Validatable>
// > {
//     constructor(
//         public validators : Container,
//         public validation : Function<[PartialUnion<Container>], Validatable>
//     ) {
//     }
//
//     validate(argument: RecordParameter<Container>) : ValidatorReturn<Container, Validatable> {
//
//         let handler = (value, validators) => <Record<PropertyKey, ValidatableInterface>>ValidateMap(value, validators, true);
//
//         return <any> new ValidatableMapCallback(
//             argument,
//             this.validators,
//             handler,
//             <Function<[Record<PropertyKey, ValidatableInterface>], Validatable>> this.validation
//         );
//     }
// }
//# sourceMappingURL=map.js.map