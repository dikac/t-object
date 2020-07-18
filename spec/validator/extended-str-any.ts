import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Asserted from "@dikac/t-value/message/asserted";
import Mixin from "@dikac/t-value/message/readonly-merge";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import StrAny from "./str-any";

export default class ExtendedStrAny extends StrAny implements Validator<any, Validatable & Message<string> & Value<string>> {

    validate(value: any): Validatable & Message<string> & Value<string> {

        return new Asserted<Validatable & Message<string> & Value<string>>(
            new Mixin(
                {value:value},
                {message:'ExtendedStrAny'},
                super.validate(value),
            )
        );
    }
}

