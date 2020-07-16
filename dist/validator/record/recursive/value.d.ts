import Record from "../../../record/recursive/record";
import RecursiveInferReturn from "./infer/return";
import Validator from "@dikac/t-validator/validator";
export default function Value<Val, Validators extends Record<PropertyKey, Validator<Val>>>(validators: Validators, value: Val): RecursiveInferReturn<Validators>;
