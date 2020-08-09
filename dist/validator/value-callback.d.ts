import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Return from "@dikac/t-validator/validatable/simple";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Instance from "@dikac/t-validator/validatable/instance";
export declare type Interface<BaseT, ValueT extends BaseT, MessageT, RecordT extends Record<any, Validator<BaseT, ValueT>>, Result extends Record<any, Instance>, ValidatableT extends Validatable> = Validator<BaseT, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>> & Validators<RecordT> & Message<Function<[Result], MessageT>> & Validation<Function<[Result], ValidatableT>>;
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, RecordT extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, Result extends Record<any, Instance> = Record<any, Instance>, ValidatableT extends Validatable = Validatable> implements Interface<BaseT, ValueT, MessageT, RecordT, Result, ValidatableT> {
    validators: RecordT;
    handler: Function<[BaseT, RecordT], Result>;
    validation: Function<[Result], ValidatableT>;
    message: Function<[Result], MessageT>;
    constructor(validators: RecordT, handler: Function<[BaseT, RecordT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>>;
}
