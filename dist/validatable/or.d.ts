import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables";
export default function Or<Object extends Record<any, Validatable>>(validatable: Object): Validatables<Object, boolean>;
