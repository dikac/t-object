import Validatable from "@dikac/t-validatable/validatable";
export default interface Validatables<Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>> {
    validatables: Object;
}
