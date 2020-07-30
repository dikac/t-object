import ValidatorType from "@dikac/t-type/validator/type";
import StringType from "@dikac/t-type/validatable/string/type";

export default class StrAny extends  ValidatorType {

    constructor() {
        super('string', StringType);
    }
}
