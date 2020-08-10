import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import InferReturn from "./infer";
export default function MapPartial<Validators extends Record<keyof Validators, Validator>>(values: RecordParameter<Validators>, validators: Validators): PartialUnion<InferReturn<Validators>>;
