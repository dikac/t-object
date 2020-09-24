import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
export default function MapPartial<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Container, validation: (result: Partial<ReturnInfer<Container>>) => ValidatableType, message: (result: Partial<ReturnInfer<Container>>) => MessageType): Map<Container, Partial<ReturnInfer<Container>>, ValidatableType, MessageType>;
