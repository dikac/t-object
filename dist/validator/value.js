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
//     Val,
//     Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>,
//     Validatable extends ValidatableInterface = ValidatableInterface
// > = ValueInterface<Val> & ValidatableInterface & {validatables : PartialUnion<Container>} & {validatable : Validatable};
//
// export default class ValueCallback<
//     Val = unknown,
//     MessageT = unknown,
//     Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>,
//     Validatable extends ValidatableInterface = ValidatableInterface
// > implements Validator<
//     Val,
//     ValidatableValueCallback<Val, MessageT, Container,  PartialUnion<Container>, Validatable>
// > {
//     constructor(
//         public validators : Container,
//         public validation : Function<[PartialUnion<Container>], Validatable>,
//         public message : Function<[PartialUnion<Container>], MessageT>
//     ) {
//     }
//
//     validate(argument: Val) : ValidatableValueCallback<Val, MessageT, Container, PartialUnion<Container>, Validatable> {
//
//         let handler = (value, validators) =>  ValidateValue(value, validators, true);
//
//         return <any> new ValidatableValueCallback(
//             argument,
//             this.validators,
//             handler,
//             this.validation,
//             this.message
//         );
//     }
// }
//# sourceMappingURL=value.js.map