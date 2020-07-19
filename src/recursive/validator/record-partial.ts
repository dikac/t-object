import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "../recursive";
import ValidatePartial from "../../validator/validatable/recursive/map-partial";
import And from "../../validatable/recursive/boolean/and";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "../../validator/validatable/recursive/recursive";
import RecursiveInferArgument from "../../validator/parameter/recursive/recursive";
import {Object} from "ts-toolbelt";

export default class RecordPartial<
    Container extends RecordObject<PropertyKey, Validator<unknown>>
> implements Validator<
    RecursiveInferArgument<Container>,
    Value<RecursiveInferArgument<Container>> & Validatable & {validatable : Object.Partial<RecursiveInferReturn<Container>, 'deep'>}
> {
    constructor(
        public validators : Container
    ) {
    }

    validate(argument: RecursiveInferArgument<Container>) : Value<RecursiveInferArgument<Container>> & Validatable & {validatable : Object.Partial<RecursiveInferReturn<Container>, 'deep'>} {

        let results : Object.Partial<RecursiveInferReturn<Container>, 'deep'> = ValidatePartial(this.validators, argument);

        return  {
            validatable : results,
            value : argument,
            valid : And(<any>results)
        };

    }
}



