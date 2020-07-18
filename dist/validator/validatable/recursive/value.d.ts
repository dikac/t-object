import Recursive from "../../../recursive/recursive";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
export default function Value<Val, Validators extends Recursive<PropertyKey, Validator<Val>>>(validators: Validators, value: Val): RecursiveInferReturn<Validators>;
