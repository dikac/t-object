import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Mixin from "@dikac/t-validatable/message/readonly-merge";
import Message from "@dikac/t-message/message";
import Str from "./str";
import Value from "@dikac/t-value/value";

export default class ExtendedStr extends Str implements Validator<string, Validatable & Message<string> & Value<string>> {

    validate(value: string): Validatable & Message<string> & Value<string> {


        return <Validatable & Message<string> & Value<string>> new Mixin(
            {value:value},
            {message:'ExtendedStr'},
            super.validate(value),
        );

    }
}
