import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";

type RecordKey<
    Base extends Record<PropertyKey, unknown>,
    Type extends Base,
    ValidatorType extends Validator<keyof Base, keyof Type>,
    Result extends Record<PropertyKey, Validatable>,
    ValidatableType extends Validatable,
    MessageType,
> = SimpleValidator<
    Base,
    Type,
    ValidatableRecordCallback<
        MessageType,
        Base,
        ValidatorType,
        Result,
        ValidatableType
        >
    > &
    ValidatorContainer<ValidatorType> &
    Message<(result:Result)=>MessageType> &
    Validation<(result:Result)=>ValidatableType>
;

export default RecordKey;
