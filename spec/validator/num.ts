import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import NumAny from "./num-any";

export default class Num extends NumAny {

    validate(value: number) {

        return  super.validate(value);
    }
}

