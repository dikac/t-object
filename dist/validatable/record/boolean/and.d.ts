import Validatable from "@dikac/t-validatable/validatable";
export default function And<Object extends Partial<Record<PropertyKey, Validatable>>>(object: Object): boolean;
