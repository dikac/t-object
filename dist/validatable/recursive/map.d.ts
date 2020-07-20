import RecursiveRecord from "../../recursive/recursive";
import RecursiveInferArgument from "../../recursive/validator/parameter/parameter";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import { Object } from "ts-toolbelt";
export default function Map<Validators extends RecursiveRecord<PropertyKey, Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopOnInvalid: true): Object.Partial<RecursiveInferReturn<Validators>, 'deep'>;
export default function Map<Validators extends RecursiveRecord<PropertyKey, Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopOnInvalid: false): RecursiveInferReturn<Validators>;
