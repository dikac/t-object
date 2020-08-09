import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import PartialUnion from "../partial-union";
import MapReturn from "./return/record/infer";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Instance from "@dikac/t-validator/validatable/instance";

//
// export type Interface<
//     BaseT,
//     ValueT extends BaseT,
//     RecordT extends Record<keyof RecordT, Validator<BaseT, ValueT>>,
//     Result extends
//         Function<[ValueT, RecordT], Partial<Record<keyof Result, Validatable>>>,
//     MessageT extends Function<[ReturnType<Result>], unknown>,
//     ValidatableT extends Function<[ReturnType<Result>], Validatable>
// > = Validator<
//         BaseT,
//         ValueT,
//         ValidatableValueCallback<BaseT, RecordT, Result, MessageT, ValidatableT>
//     > &
//     Validators<RecordT> &
//     Message<MessageT> &
//     Validation<ValidatableT>;
//
// export default class ValueCallback<
//     BaseT = unknown,
//     ValueT extends BaseT = BaseT,
//     RecordT extends Record<keyof RecordT, Validator<BaseT, ValueT>> = Record<PropertyKey, Validator<BaseT, ValueT>>,
//     Result extends
//         Function<[ValueT, RecordT], Partial<Record<keyof Result, Validatable>>> =
//         Function<[ValueT, RecordT], Partial<Record<PropertyKey, Validatable>>>,
//     MessageT extends Function<[ReturnType<Result>], unknown>= Function<[ReturnType<Result>], unknown>,
//     ValidatableT extends Function<[ReturnType<Result>], Validatable> = Function<[ReturnType<Result>], Validatable>
// > implements Interface<BaseT, ValueT, RecordT, Result, MessageT, ValidatableT> {
//     constructor(
//         public validators : RecordT,
//         public handler : Result,
//         public validation : ValidatableT,
//         public message : MessageT
//     ) {
//     }
//
//     validate<Argument extends BaseT>(argument: Argument) : Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, RecordT, Result, MessageT, ValidatableT>> {
//
//         return <Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>>>
//             new ValidatableValueCallback(argument, this.validators, this.handler, this.validation, this.message);
//     }
// }




export type Interface<
    BaseT,
    ValueT extends BaseT,
    MessageT,
    RecordT extends Record<any, Validator<BaseT, ValueT>>,
    Result extends Record<any, Instance>,
    ValidatableT extends Validatable
> = Validator<
        BaseT,
        ValueT,
        ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>
    > &
    Validators<RecordT> &
    Message<Function<[Result], MessageT>> &
    Validation<Function<[Result], ValidatableT>>;

export default class ValueCallback<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    RecordT extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>,
    Result extends Record<any, Instance> = Record<any, Instance>,
    ValidatableT extends Validatable = Validatable
> implements Interface<BaseT, ValueT, MessageT, RecordT, Result, ValidatableT> {
    constructor(
        public validators : RecordT,
        public handler : Function<[BaseT, RecordT], Result>,
        public validation : Function<[Result], ValidatableT>,
        public message : Function<[Result], MessageT>
    ) {
    }

    validate<Argument extends BaseT>(argument: Argument) : Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>> {

        return <Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>>>
            new ValidatableValueCallback(argument, this.validators, this.handler, this.validation, this.message);
    }
}
