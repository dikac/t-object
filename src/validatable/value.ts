import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import BaseValue from "@dikac/t-value/value";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import MemoizeGetter from "../value/value/memoize-getter";

export default interface Value <
    ValueT,
    MessageT,
    RecordT extends Record<PropertyKey, Validator<ValueT>>,
    Result extends Record<PropertyKey, ValidatorValidatable>,
    ValidatableT extends Validatable
> extends
    Readonly<BaseValue<ValueT>>,
    Readonly<Validatable<boolean>>,
    Readonly<Validatables<Result>>,
    Readonly<Messages<Result>>,
    Readonly<Message<MessageT>>
{};

