import RecursiveInferArgument from "../../record/validator/parameter/parameter";
import RecursiveInferReturn from "../../validator/validatable/record/record";
import Validator from "@dikac/t-validator/validator";
import Optional from "../../validator/validatable/record/optional";
export default function Map<Validators extends Record<PropertyKey, Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopOnInvalid: true): Optional<Validators>;
export default function Map<Validators extends Record<PropertyKey, Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopOnInvalid: false): RecursiveInferReturn<Validators>;
