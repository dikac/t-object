import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Union from "../union";
import MapReturn from "./validatable/record/infer";
import ValueInterface from "./value";
export default function ValuePartial<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, Container extends Record<PropertyKey, Validator<BaseT, ValueT>> = Record<PropertyKey, Validator<BaseT, ValueT>>, ValidatableT extends Validatable = Validatable>(validators: Container, validation: (result: Union<ReturnInfer<Container>>) => ValidatableT, message: (result: Union<ReturnInfer<Container>>) => MessageT): ValueInterface<BaseT, ValueT, MessageT, Container, Union<MapReturn<Container>>, ValidatableT>;
