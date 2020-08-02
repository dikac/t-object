import RecordParameter from "../../parameter/base/record/infer";
import Validator from "@dikac/t-validator/validator";
import MapPartialUnion from "../../../map-partial-union";
import InferReturn from "./infer";
export default function Standard<Validators extends Record<PropertyKey, Validator>>(values: RecordParameter<Validators>, validators: Validators, stopOnInvalid: true): MapPartialUnion<InferReturn<Validators>>;
export default function Standard<Validators extends Record<PropertyKey, Validator>>(values: RecordParameter<Validators>, validators: Validators, stopOnInvalid: false): InferReturn<Validators>;
