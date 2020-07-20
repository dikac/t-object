import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import ValueInterface from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import { Object } from "ts-toolbelt";
export default class ValuePartial<Val, Container extends RecordObject<PropertyKey, Validator<Val>>> implements Validator<Val, ValueInterface<Val> & Validatable & {
    validation: Object.Partial<RecursiveInferReturn<Container>, 'deep'>;
}> {
    validators: Container;
    constructor(validators: Container);
    validate(argument: Val): {
        validation: Object.Partial<RecursiveInferReturn<Container>, 'deep'>;
    } & ValueInterface<Val> & Validatable;
}
