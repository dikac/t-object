import RecursiveInferReturn from "../../validator/validatable/recursive/record";
import Validator from "@dikac/t-validator/validator";
import Optional from "../../validator/validatable/recursive/optional";
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(validators: Validators, value: Val, stopOnInvalid: true): Optional<Validators>;
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(validators: Validators, value: Val, stopOnInvalid: false): RecursiveInferReturn<Validators>;
