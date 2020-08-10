import ValidatorSimple from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import RecordParameter from "./base/record/infer";
import FunctionS from "@dikac/t-function/function-single";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import { Interface as ValidatableMapCallbackInterface } from "../validatable/map-callback";
import RecordBase from "./base/record/infer";
import RecordType from "./type/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Simple from "@dikac/t-validator/validatable/simple";
export declare type Interface<Container extends Record<any, Validator>, Result extends Record<any, Instance>, ValidatableT extends Validatable, MessageT> = ValidatorSimple<RecordBase<Container>, RecordType<Container>, ValidatableMapCallbackInterface<MessageT, Container, Result, ValidatableT, RecordBase<Container>>> & Validation<FunctionS<Result, ValidatableT>> & Validators<Container> & Message<FunctionS<Result, MessageT>> & {
    map: Function<[RecordParameter<Container>, Container], Result>;
};
export default class MapCallback<Container extends Record<any, Validator> = Record<PropertyKey, Validator>, Result extends Record<any, Instance> = Record<PropertyKey, Instance>, ValidatableT extends Validatable = Validatable, MessageT = unknown> implements Interface<Container, Result, ValidatableT, MessageT> {
    validators: Container;
    map: Function<[RecordParameter<Container>, Container], Result>;
    validation: FunctionS<Result, ValidatableT>;
    message: FunctionS<Result, MessageT>;
    constructor(validators: Container, map: Function<[RecordParameter<Container>, Container], Result>, validation: FunctionS<Result, ValidatableT>, message: FunctionS<Result, MessageT>);
    validate<Argument extends RecordType<Container>>(argument: Argument): ValidatableReplace<ValidatableMapCallbackInterface<MessageT, Container, Result, ValidatableT, Argument>, true>;
    validate<Argument extends RecordBase<Container>>(argument: Argument): Simple<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallbackInterface<MessageT, Container, Result, ValidatableT, RecordBase<Container>>>;
}
