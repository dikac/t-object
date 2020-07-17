import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";

export default class Str implements Validator<string, Validatable> {

    validate(value: string): Validatable {

        return {valid: typeof value === "string"};
    }
}
