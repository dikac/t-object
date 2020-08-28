import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
import Union from "../union";
export default function MapPartial<Container extends Record<any, Validator> = Record<PropertyKey, Validator>, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: Container, validation: (result: Union<ReturnInfer<Container>>) => ValidatableT, message: (result: Union<ReturnInfer<Container>>) => MessageT): Omit<Map<Container, Union<ReturnInfer<Container>>, ValidatableT, MessageT>, 'map'>;
