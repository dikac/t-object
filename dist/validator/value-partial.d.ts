import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Union from "../union";
import MapReturn from "./validatable/record/infer";
import ValueInterface from "./value";
export default function ValuePartial<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Container extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable>(validators: Container, validation: (result: Union<ReturnInfer<Container>>) => ValidatableType, message: (result: Union<ReturnInfer<Container>>) => MessageType): ValueInterface<BaseType, ValueType, MessageType, Container, Union<MapReturn<Container>>, ValidatableType>;
