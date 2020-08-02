import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/base/record/infer";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableMapCallback from "../validatable/map-callback";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/return/return";

interface MapCallbackInterface<
    Container extends Record<PropertyKey, Validator>,
    Result extends Record<PropertyKey, ValidatableInterface & Message & Value>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown,
> extends
    Validator<
        RecordBase<Container>,
        RecordType<Container>,
        ValidatableMapCallback<MessageT, Container, Result, Validatable>
    >,
    Validators<Container>, Message<Function<[Result], MessageT>>
{
     handler : Function<[RecordParameter<Container>, Container], Result>,
     validation : Function<[Result], Validatable>,
}

export default function MapCallback<
    Container extends Record<any, Validator> = Record<any, Validator>,
    Result extends Record<PropertyKey, ValidatableInterface & Message & Value> = Record<PropertyKey, ValidatableInterface & Message & Value>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown,
>(
    validators : Container,
    handler : Function<[RecordParameter<Container>, Container], Result>,
    validation : Function<[Result], Validatable>,
    message : Function<[Result], MessageT>
) : MapCallbackInterface<Container, Result, Validatable, MessageT> {
    return new MapCallbackClass(validators, handler, validation, message);
}

export class MapCallbackClass<
    Container extends Record<any, Validator> = Record<any, Validator>,
    Result extends Record<PropertyKey, ValidatableInterface & Message & Value> = Record<PropertyKey, ValidatableInterface & Message & Value>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown,
> implements MapCallbackInterface<Container, Result, Validatable, MessageT> {
    constructor(
        public validators : Container,
        public handler : Function<[RecordParameter<Container>, Container], Result>,
        public validation : Function<[Result], Validatable>,
        public message : Function<[Result], MessageT>
    ) {
    }

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) : Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, Result, Validatable>> {

        return <Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, Result, Validatable>>>
            new ValidatableMapCallback(argument, this.validators, this.handler, this.validation, this.message);
    }
}



