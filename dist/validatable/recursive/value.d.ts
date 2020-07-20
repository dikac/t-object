import Recursive from "../../recursive/recursive";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import { Object } from "ts-toolbelt";
export default function Value<Val, Validators extends Recursive<PropertyKey, Validator<Val>>>(validators: Validators, value: Val, stopOnInvalid: true): Object.Partial<RecursiveInferReturn<Validators>, 'deep'>;
export default function Value<Val, Validators extends Recursive<PropertyKey, Validator<Val>>>(validators: Validators, value: Val, stopOnInvalid: false): RecursiveInferReturn<Validators>;
