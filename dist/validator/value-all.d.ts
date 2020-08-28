import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import MapReturn from "./validatable/record/infer";
import ValueInterface from "./value";
export default function ValueAll<Base = unknown, Value extends Base = Base, Message = unknown, Validators extends Record<any, Validator<Base, Value>> = Record<any, Validator<Base, Value>>, ValidatableT extends Validatable = Validatable>(validators: Validators, validation: (result: MapReturn<Validators>) => ValidatableT, message: (result: MapReturn<Validators>) => Message): ValueInterface<Base, Value, Message, Validators, MapReturn<Validators>, ValidatableT>;
