import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
export default function ValuePartial<Val, Validators extends Record<keyof Validators, Validator<Val>>>(value: Val, validators: Validators): PartialUnion<ValidatableRecord<Validators>>;
