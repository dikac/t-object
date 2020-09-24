import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
export default function MapPartial<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: Partial<ReturnInfer<Validators>>) => ValidatableType, message: (result: Partial<ReturnInfer<Validators>>) => MessageType): Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType>;
