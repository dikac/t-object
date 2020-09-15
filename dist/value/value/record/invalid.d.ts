import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import RecordInfer from "./infer";
import PartialUnion from "../../../partial-union";
export default function Invalid<Instance extends Record<PropertyKey, Value & Validatable>>(record: Instance): PartialUnion<RecordInfer<Instance>>;
