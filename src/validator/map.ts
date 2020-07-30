import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "./return/record/standard";
import RecordParameter from "./parameter/record/record";
import PartialUnion from "./return/record/partial-union";

export type ValidatorReturn<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface
> = ValueInterface<RecordParameter<Container>> & ValidatableInterface & {validatables : PartialUnion<Container>} & {validatable : Validatable};
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
