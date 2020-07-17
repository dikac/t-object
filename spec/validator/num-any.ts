import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";

export default class NumAny implements Validator<any, Validatable> {

    validate(value: any): Validatable {

        return {valid: typeof value === "number"};
    }
}


