import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
export default function MapAll<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Container, validation: (result: ReturnInfer<Container>) => ValidatableType, message: (result: ReturnInfer<Container>) => MessageType): Map<Container, ReturnInfer<Container>, ValidatableType, MessageType>;
