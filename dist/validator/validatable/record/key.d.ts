import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
export default function Key<KeyT, Validators extends Record<PropertyKey, Validator<KeyT>>>(value: KeyT, validators: Validators, stopOnInvalid: true): PartialUnion<ValidatableRecord<Validators>>;
export default function Key<KeyT, Validators extends Record<PropertyKey, Validator<KeyT>>>(value: KeyT, validators: Validators, stopOnInvalid: false): ValidatableRecord<Validators>;
