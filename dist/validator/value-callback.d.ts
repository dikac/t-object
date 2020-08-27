import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { Interface as ValidatableValueCallbackInterface } from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Return from "@dikac/t-validator/validatable/simple";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
export declare type Interface<BaseT, ValueT extends BaseT, MessageT, RecordT extends Record<any, Validator<BaseT, ValueT>>, Result extends Record<any, Instance>, ValidatableT extends Validatable> = Validator<BaseT, ValueT, boolean, true, ValidatableValueCallbackInterface<BaseT, MessageT, RecordT, Result, ValidatableT>> & Validators<RecordT> & Message<(result: Result) => MessageT> & Validation<(result: Result) => ValidatableT>;
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, RecordT extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, Result extends Record<any, Instance> = Record<any, Instance>, ValidatableT extends Validatable = Validatable> implements Interface<BaseT, ValueT, MessageT, RecordT, Result, ValidatableT> {
    validators: RecordT;
    handler: (base: BaseT, record: RecordT) => Result;
    validation: (result: Result) => ValidatableT;
    message: (result: Result) => MessageT;
    constructor(validators: RecordT, handler: (base: BaseT, record: RecordT) => Result, validation: (result: Result) => ValidatableT, message: (result: Result) => MessageT);
    validate<Argument extends ValueT>(argument: Argument): Replace<ValidatableValueCallbackInterface<Argument, MessageT, RecordT, Result, ValidatableT>, true>;
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, ValueT, ValidatableValueCallbackInterface<Argument, MessageT, RecordT, Result, ValidatableT>>;
}
