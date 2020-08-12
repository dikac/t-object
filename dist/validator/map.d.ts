import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "./validatable/record/infer";
import { Interface } from "./map-callback";
export default function Map<Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: Container, validation: Function<[ReturnInfer<Container>], ValidatableT>, message: Function<[ReturnInfer<Container>], MessageT>): Interface<Container, ReturnInfer<Container>, ValidatableT, MessageT>;
