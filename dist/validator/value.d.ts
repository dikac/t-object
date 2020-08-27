import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import MapReturn from "./validatable/record/infer";
import { Interface } from "./value-callback";
export default function Value<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, Container extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, ValidatableT extends Validatable = Validatable>(validators: Container, validation: (result: MapReturn<Container>) => ValidatableT, message: (result: MapReturn<Container>) => MessageT): Interface<BaseT, ValueT, MessageT, Container, MapReturn<Container>, ValidatableT>;
