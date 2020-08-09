import Validator from "@dikac/t-validator/validator";

export default interface Validators<
    Object extends Record<keyof Object, Validator> = Record<PropertyKey, Validator>
> {

    validators : Object;
}
