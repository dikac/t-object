import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import RecordValidatable from "./return/record/record";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "./return/record/standard";
import RecordParameter from "./parameter/record/record";
import Message from "@dikac/t-message/message";

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
