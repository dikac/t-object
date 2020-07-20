import RecursiveRecord from "../../recursive/recursive";
import RecursiveInferArgument from "../../recursive/validator/parameter/parameter";
import RecursiveInferReturn from "../../validator/validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import Optional from "../../validator/validatable/recursive/optional";
export default function Map<Validators extends RecursiveRecord<PropertyKey, Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopOnInvalid: true): Optional<Validators>;
export default function Map<Validators extends RecursiveRecord<PropertyKey, Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopOnInvalid: false): RecursiveInferReturn<Validators>;
