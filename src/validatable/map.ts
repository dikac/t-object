import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Validatables from "./validatables/validatables";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Messages from "../message/messages/messages";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "../validator/validators/validators";

export default interface Map<
    MessageT,
    ValidatorsT extends Record<any, Validator>,
    Result extends Record<any, Instance>,
    ValidatableT extends Validatable,
    ValueT extends RecordBase<ValidatorsT>
> extends
    Instance<ValueT, MessageT>,
    Validatable,
    Validatables<Result>,
    ValidatableContainer<ValidatableT>,
    Messages<Result>,
    Validators<ValidatorsT>
{}
