import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import MapPartialUnion from "../../../map-partial-union";
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(value: Val, validators: Validators, stopOnInvalid: true): MapPartialUnion<ValidatableRecord<Validators>>;
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(value: Val, validators: Validators, stopOnInvalid: false): ValidatableRecord<Validators>;
