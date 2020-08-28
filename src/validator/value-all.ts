import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/record/value";
import MapReturn from "./validatable/record/infer";
import ValueCallback from "./value-callback";
import ValueInterface from "./value";

export default function ValueAll<
    Base = unknown,
    Value extends Base = Base,
    Message = unknown,
    Validators extends Record<any, Validator<Base, Value>> = Record<any, Validator<Base, Value>>,
    ValidatableT extends Validatable = Validatable
>(
    validators : Validators,
    validation : (result:MapReturn<Validators>) => ValidatableT,
    message : (result:MapReturn<Validators>) => Message,

) : ValueInterface<Base, Value, Message, Validators, MapReturn<Validators>, ValidatableT> {

    return new ValueCallback(
        validators,
        ValidateValue,
        validation,
        message
    ) as ValueInterface<Base, Value, Message, Validators, MapReturn<Validators>, ValidatableT>;
}
