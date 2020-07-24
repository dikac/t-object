import ValidatableRecord from "./record";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(value: Val, validators: Validators, stopOnInvalid: true): PartialUnion<Validators>;
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(value: Val, validators: Validators, stopOnInvalid: false): ValidatableRecord<Validators>;
