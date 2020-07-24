import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables";
export default function And<Record extends globalThis.Record<PropertyKey, Validatable>>(validatable: Record): Validatables<Record, boolean>;
