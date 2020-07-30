import Validatable from "@dikac/t-validatable/validatable";

export default interface Validatables<
    Object extends Partial<Record<keyof any, Validatable>> = Partial<Record<keyof any, Validatable>>
> {

    validatables : Object;
}

