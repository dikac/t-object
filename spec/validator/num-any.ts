import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorType from "@dikac/t-type/validator/type";
import StringType from "@dikac/t-type/validatable/string/type";

export default class NumAny extends  ValidatorType {

    constructor() {
        super('number', StringType);
    }
}


