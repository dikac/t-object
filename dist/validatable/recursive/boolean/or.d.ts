import Validatable from "@dikac/t-validatable/validatable";
export default function Or<Object extends Record<PropertyKey, Validatable>>(object: Object): boolean;
