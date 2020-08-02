import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "./return/record/standard";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import MapPartialUnion from "../map-partial-union";
import ReturnInfer from "./return/record/infer";
import Return from "@dikac/t-validator/return/return";

interface MapInterface<
    RecordT extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown
> extends Validator<
    RecordBase<RecordT>,
    RecordBase<RecordT>,
    ValidatableMapCallback<MessageT, RecordT, MapPartialUnion<ReturnInfer<RecordT>>, Validatable>
>{
    validators : RecordT,
    validation : Function<[MapPartialUnion<ReturnInfer<RecordT>>], Validatable>,
    message : Function<[MapPartialUnion<ReturnInfer<RecordT>>], MessageT>,
}

export default function Map<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown
>(
    validators : Container,
    validation : Function<[MapPartialUnion<ReturnInfer<Container>>], Validatable>,
    message : Function<[MapPartialUnion<ReturnInfer<Container>>], MessageT>,
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
        public validation : Function<[MapPartialUnion<ReturnInfer<Container>>], Validatable>,
        public message : Function<[MapPartialUnion<ReturnInfer<Container>>], MessageT>,
    ) {
    }

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) : Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, MapPartialUnion<ReturnInfer<Container>>, Validatable>> {

        let handler = (value, validators) => <MapPartialUnion<ReturnInfer<Container>>>ValidateMap(value, validators, true);

        return <Return<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapCallback<MessageT, Container, MapPartialUnion<ReturnInfer<Container>>, Validatable>>>
            new ValidatableMapCallback(
            argument,
            this.validators,
            handler,
            this.validation,
            this.message
        );
    }
}
