import Validatable from "@dikac/t-validatable/validatable";

export default interface Validatables<
    Record extends globalThis.Record<PropertyKey, Validatable> = globalThis.Record<PropertyKey, Validatable>
> {

    validatables : Record;
}
