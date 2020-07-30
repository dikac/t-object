import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidateValue from "./return/record/value";
import PartialUnion from "./return/record/partial-union";
import RecordValidatable from "./return/record/record";

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
