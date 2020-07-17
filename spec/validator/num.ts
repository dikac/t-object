import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";

export default class Num implements Validator<number, Validatable> {

    validate(value: number): Validatable {

        return {valid: typeof value === "number"};
    }
}
