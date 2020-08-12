import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import { O } from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import { Interface } from "./record-key-callback";
export default function RecordKey<BaseT extends Record<PropertyKey, any> = Record<PropertyKey, any>, TypeT extends BaseT = BaseT, ValidatorT extends Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>> = Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>>, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validator: ValidatorT, validation: Function<[Record<PropertyKey, ReturnInfer<ValidatorT>>], ValidatableT>, message: Function<[Record<PropertyKey, ReturnInfer<ValidatorT>>], MessageT>): Interface<BaseT, TypeT, ValidatorT, Record<PropertyKey, ReturnInfer<ValidatorT>>, ValidatableT, MessageT>;
