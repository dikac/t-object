import Validator from "@dikac/t-validator/validator";

export default interface Validators<
    Object extends Partial<Record<PropertyKey, Validator>> = Partial<Record<PropertyKey, Validator>>
> {

    validators : Object;
}
