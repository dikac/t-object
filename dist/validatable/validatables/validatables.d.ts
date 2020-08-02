import Validatable from "@dikac/t-validatable/validatable";
export default interface Validatables<Object extends Partial<Record<any, Validatable>> = Partial<Record<any, Validatable>>> {
    validatables: Object;
}
