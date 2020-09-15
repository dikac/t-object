import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
import Union from "../union";
export default function MapPartial<Container extends Record<any, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Container, validation: (result: Union<ReturnInfer<Container>>) => ValidatableType, message: (result: Union<ReturnInfer<Container>>) => MessageType): Omit<Map<Container, Union<ReturnInfer<Container>>, ValidatableType, MessageType>, 'map'>;
