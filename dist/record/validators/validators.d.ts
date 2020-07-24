import Validator from "@dikac/t-validator/validator";
export default interface Validators<Record extends globalThis.Record<PropertyKey, Validator>> {
    validators: Record;
}
