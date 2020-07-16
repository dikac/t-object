import Record from "@dikac/t-object/record/recursive/record";
import Validatable from "@dikac/t-validatable/validatable";
export default function And<Object extends Record<PropertyKey, Validatable>>(object: Object): boolean;
