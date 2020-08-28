import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import { Interface } from "./record-key-callback";
import Union from "../union";
export default function RecordKeyPartial<Base extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Type extends Base = Base, ValidatorType extends Validator<O.UnionOf<Base>, O.UnionOf<Type>> = Validator<O.UnionOf<Base>, O.UnionOf<Type>>, ValidatableType extends Validatable = Validatable, MessageT = unknown>(validator: ValidatorType, validation: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => ValidatableType, message: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => MessageT): Interface<Base, Type, ValidatorType, Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageT>;
