import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Asserted from "@dikac/t-value/message/asserted";
import Mixin from "@dikac/t-value/message/readonly-merge";
import Num from "./num";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";

export default class ExtendedNum extends Num implements Validator<number, Validatable & Message<string> & Value<number>> {

    validate(value: number)  {

        return <any> new Asserted<Validatable & Message<string> & Value<number>>(
            new Mixin(
                {value:value},
                {message:'ExtendedNum'},
                super.validate(value),
            )
        );
    }
}
