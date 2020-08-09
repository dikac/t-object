import RecordParameter from "../../parameter/base/record/infer";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
export default function Map<Validators extends Record<keyof Validators, Validator>>(values: RecordParameter<Validators>, validators: Validators): InferReturn<Validators>;
