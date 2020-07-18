import Recursive from "../../../recursive/recursive";
import Validatable from "@dikac/t-validatable/validatable";
export default function And<Object extends Recursive<PropertyKey, Validatable>>(object: Object): boolean;