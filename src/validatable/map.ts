import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Validatables from "./validatables/validatables";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Messages from "../message/messages/messages";
import Validators from "../validator/validators/validators";

export default interface Map<
    MessageType,
    ValidatorsType extends Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable,
    ValueType extends RecordBase<ValidatorsType>
> extends
    Instance<ValueType, MessageType>,
    Validatable,
    Validatables<Result>,
    ValidatableContainer<ValidatableType>,
    Messages<Result>,
    Validators<ValidatorsType>
{}
