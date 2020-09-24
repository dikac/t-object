import ValidatorSimple from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableMap from "../validatable/map";
import RecordBase from "./base/record/infer";
import RecordType from "./type/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";

export default interface Map<
    ValidatorsType extends Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable,
    MessageType,
> extends
    ValidatorSimple<
        RecordBase<ValidatorsType>,
        RecordType<ValidatorsType>,
        ValidatableMap<MessageType, ValidatorsType, Result, ValidatableType, RecordBase<ValidatorsType>>
    > ,
    Validation<(result:Result)=>ValidatableType> ,
    Validators<ValidatorsType>,
    Message<(result:Result)=>MessageType>
{}




