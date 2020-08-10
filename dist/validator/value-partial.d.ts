import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "./validatable/record/infer";
import Union from "../union";
import MapReturn from "./validatable/record/infer";
import { Interface } from "./value-callback";
export default function ValuePartial<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, Container extends Record<keyof Container, Validator<BaseT, ValueT>> = Record<PropertyKey, Validator<BaseT, ValueT>>, ValidatableT extends Validatable = Validatable>(validators: Container, validation: Function<[Union<ReturnInfer<Container>>], ValidatableT>, message: Function<[Union<ReturnInfer<Container>>], MessageT>): Interface<BaseT, ValueT, MessageT, Container, Union<MapReturn<Container>>, ValidatableT>;
