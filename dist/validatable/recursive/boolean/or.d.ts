import Record from "../../../recursive/recursive";
import Validatable from "@dikac/t-validatable/validatable";
export default function And<Object extends Record<PropertyKey, Validatable>>(object: Object): boolean;
