import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import RecordInfer from "./infer";
export default function Valid<Instance extends Record<PropertyKey, Value & Validatable>>(record: Instance): Partial<RecordInfer<Instance>>;
