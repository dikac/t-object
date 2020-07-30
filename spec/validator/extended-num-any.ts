import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Asserted from "@dikac/t-value/message/asserted";
import Mixin from "@dikac/t-value/message/readonly-merge";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumAny from "./num-any";

export default class ExtendedNumAny extends NumAny implements Validator<any, Validatable & Message<string> & Value<number>> {

    validate(value: any) {

        return <any>new Asserted<Validatable & Message<string> & Value<number>>(
            new Mixin(
                {value:value},
                {message:'ExtendedNumAny'},
                super.validate(value),
            )
        );
    }
}
