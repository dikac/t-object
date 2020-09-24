import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
export default function MapAll<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: ReturnInfer<Validators>) => ValidatableType, message: (result: ReturnInfer<Validators>) => MessageType): Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>;
