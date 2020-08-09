import Validator from "@dikac/t-validator/validator";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import { O } from "ts-toolbelt";
import Instance from "@dikac/t-validator/validatable/instance";
export declare type Interface<BaseT extends Record<PropertyKey, unknown>, TypeT extends BaseT, ValidatorT extends Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>>, Result extends Record<keyof Result, Instance>, ValidatableT extends Validatable, MessageT> = Validator<BaseT, TypeT, ValidatableRecordCallback<MessageT, BaseT, ValidatorT, Result, ValidatableT>> & ValidatorContainer<ValidatorT> & Message<Function<[Result], MessageT>> & Validation<Function<[Result], ValidatableT>>;
export default class RecordValueCallback<BaseT extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, TypeT extends BaseT = BaseT, ValidatorT extends Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>> = Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>>, Result extends Record<keyof Result, Instance> = Record<keyof PropertyKey, Instance>, ValidatableT extends Validatable = Validatable, MessageT = unknown> implements Interface<BaseT, TypeT, ValidatorT, Result, ValidatableT, MessageT> {
    validator: ValidatorT;
    handler: Function<[BaseT, ValidatorT], Result>;
    validation: Function<[Result], ValidatableT>;
    message: Function<[Result], MessageT>;
    constructor(validator: ValidatorT, handler: Function<[BaseT, ValidatorT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, TypeT, ValidatableRecordCallback<MessageT, BaseT, ValidatorT, Result, ValidatableT>>;
}
