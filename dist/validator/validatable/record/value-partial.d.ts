import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
export default function ValuePartial<ValueT, Validators extends Record<PropertyKey, Validator<ValueT>>>(value: ValueT, validators: Validators, stop?: boolean): Partial<ValidatableRecord<Validators>>;
