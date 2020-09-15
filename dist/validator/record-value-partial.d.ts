import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import { Interface } from "./record-value-callback";
import Union from "../union";
export default function RecordValuePartial<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (record: Record<any, ReturnInfer<ValidatorType>>) => ValidatableType, message: (record: Record<any, ReturnInfer<ValidatorType>>) => MessageType): Interface<ValidatorType, Union<Record<any, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
