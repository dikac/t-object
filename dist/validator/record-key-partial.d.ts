import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import Union from "../union";
import RecordKey from "./record-key";
export default function RecordKeyPartial<Base extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Type extends Base = Base, ValidatorType extends Validator<O.UnionOf<Base>, O.UnionOf<Type>> = Validator<O.UnionOf<Base>, O.UnionOf<Type>>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => ValidatableType, message: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => MessageType): RecordKey<Base, Type, ValidatorType, Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
