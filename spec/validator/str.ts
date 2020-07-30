import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import StrAny from "./str-any";

export default class Str extends StrAny {

    validate(value: string) {

        return  super.validate(value);
    }
}

