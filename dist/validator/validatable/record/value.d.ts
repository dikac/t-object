import Record from "../../../record/record";
import RecursiveInferReturn from "./validatable";
import Validator from "@dikac/t-validator/validator";
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(validators: Validators, value: Val): RecursiveInferReturn<Validators>;
