import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
export default function MapPartial<Validators extends Record<PropertyKey, Validator>>(values: RecordParameter<Validators>, validators: Validators): Partial<InferReturn<Validators>>;
