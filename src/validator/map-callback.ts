import ValidatorSimple from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import RecordParameter from "./parameter/base/record/infer";
import FunctionS from "@dikac/t-function/function-single";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableMapCallback, {Interface as ValidatableMapCallbackInterface} from "../validatable/map-callback";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/instance";
import PartialUnion from "../partial-union";

export type Interface<
    Container extends Record<any, Validator>,
    Result extends Record<any, Instance>,
    ValidatableT extends Validatable,
    MessageT,
> =
    ValidatorSimple<
        RecordBase<Container>,
        RecordType<Container>,
        ValidatableMapCallbackInterface<MessageT, Container, Result, ValidatableT, RecordBase<Container>>
    > &
    Validation<FunctionS<Result, ValidatableT>> &
    Validators<Container> &
    Message<FunctionS<Result, MessageT>> &
    {map : Function<[RecordParameter<Container>, Container], Result>}

export default class MapCallback<
    Container extends Record<any, Validator> = Record<PropertyKey, Validator>,
    Result extends Record<any, Instance> = Record<PropertyKey, Instance>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> implements Interface <Container, Result, ValidatableT, MessageT> {
    constructor(
        public validators : Container,
        public map : Function<[RecordParameter<Container>, Container], Result>,
        public validation : FunctionS<Result, ValidatableT>,
        public message : FunctionS<Result, MessageT>
    ) {
    }

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) : Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallbackInterface<MessageT, Container, Result, ValidatableT, Argument>> {

        return <Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallbackInterface<MessageT, Container, Result, ValidatableT, Argument>>>
            new ValidatableMapCallback(argument, this.validators, this.map, this.validation, this.message);
    }
}



