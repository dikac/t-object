import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/recursive/recursive";
import RecursiveInferArgument from "../../validator/parameter/recursive/recursive";
import { Object } from "ts-toolbelt";
export default class RecordPartial<Container extends RecordObject<PropertyKey, Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, Value<RecursiveInferArgument<Container>> & Validatable & {
    validatable: Object.Partial<RecursiveInferReturn<Container>, 'deep'>;
}> {
    validators: Container;
    constructor(validators: Container);
    validate(argument: RecursiveInferArgument<Container>): Value<RecursiveInferArgument<Container>> & Validatable & {
        validatable: Object.Partial<RecursiveInferReturn<Container>, 'deep'>;
    };
}
