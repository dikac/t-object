import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "./return/record/standard";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import PartialUnion from "../partial-union";
import ReturnInfer from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";

interface MapInterface<
    RecordT extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown
> extends Validator<
    RecordBase<RecordT>,
    RecordBase<RecordT>,
    ValidatableMapCallback<MessageT, RecordT, PartialUnion<ReturnInfer<RecordT>>, Validatable>
>{
    validators : RecordT,
    validation : Function<[PartialUnion<ReturnInfer<RecordT>>], Validatable>,
    message : Function<[PartialUnion<ReturnInfer<RecordT>>], MessageT>,
}

export default function Map<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown
>(
    validators : Container,
    validation : Function<[PartialUnion<ReturnInfer<Container>>], Validatable>,
    message : Function<[PartialUnion<ReturnInfer<Container>>], MessageT>,
) : MapInterface<Container, Validatable, MessageT> {

    return new MapClass(validators, validation, message)
}

export class MapClass<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown,
> implements MapInterface<Container, Validatable, MessageT> {
    constructor(
        public validators : Container,
        public validation : Function<[PartialUnion<ReturnInfer<Container>>], Validatable>,
        public message : Function<[PartialUnion<ReturnInfer<Container>>], MessageT>,
    ) {
    }

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) : Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, PartialUnion<ReturnInfer<Container>>, Validatable>> {

        let handler = (value, validators) => <PartialUnion<ReturnInfer<Container>>>ValidateMap(value, validators, true);

        return <Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, PartialUnion<ReturnInfer<Container>>, Validatable>>>
            new ValidatableMapCallback(
            argument,
            this.validators,
            handler,
            this.validation,
            this.message
        );
    }
}
