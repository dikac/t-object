import Validatable from "@dikac/t-validatable/validatable";

export default interface Validatables<
    Object extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>
> {

    validatables : Object;
}

