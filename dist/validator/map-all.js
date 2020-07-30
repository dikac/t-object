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
// export type ValidatorReturn<
//     Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Validatable extends ValidatableInterface = ValidatableInterface
// > = ValueInterface<RecordParameter<Container>> &
//     ValidatableInterface &
//     {validatables : RecordValidatable<Container>} &
//     {validatable : Validatable};
//
// export default class MapAll<
//     MessageT = unknown,
//     Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Validatable extends ValidatableInterface = ValidatableInterface
// > implements Validator<
//     RecordParameter<Container>,
//     ValidatableMapCallback< MessageT, Container, RecordValidatable<Container>, Validatable>
// > {
//     constructor(
//         public validators : Container,
//         public validation : Function<[RecordValidatable<Container>], Validatable>,
//         public message : Function<[RecordValidatable<Container>], MessageT>
//     ) {
//     }
//
//     validate(argument: RecordParameter<Container>) : ValidatableMapCallback< MessageT, Container, globalThis.Record<PropertyKey, ValidatableInterface & Message>, Validatable> {
//
//         let handler = (value, validators) => ValidateMap(value, validators, false);
//
//         return new ValidatableMapCallback(argument, this.validators, handler, this.validation, this.message);
//     }
// }
//# sourceMappingURL=map-all.js.map