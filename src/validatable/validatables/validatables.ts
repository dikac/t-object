import Validatable from "@dikac/t-validatable/validatable";

export default interface Validatables<
    Object extends Record<any, Validatable> = Record<any, Validatable>
> {

    validatables : Object;
}

