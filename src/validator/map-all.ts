import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "./return/record/infer";
import ValidatableMapCallback from "../validatable/map-callback";
import ValidateMap from "./return/record/standard";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import Return from "@dikac/t-validator/return/return";


interface MapAllInterface<
    RecordT extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown
> extends Validator<
    RecordBase<RecordT>,
    RecordBase<RecordT>,
    ValidatableMapCallback<MessageT, RecordT, ReturnInfer<RecordT>, Validatable>
>{
     validators : RecordT,
     validation : Function<[ReturnInfer<RecordT>], Validatable>,
     message : Function<[ReturnInfer<RecordT>], MessageT>
};

export default function MapAll<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Validatable extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown
    >(
    validators : Container,
    validation : Function<[ReturnInfer<Container>], Validatable>,
    message : Function<[ReturnInfer<Container>], MessageT>
) : MapAllInterface<Container, Validatable, MessageT> {

    return new MapAllClass(validators, validation, message)
}

export class MapAllClass<
    RecordT extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableT extends ValidatableInterface = ValidatableInterface,
    MessageT = unknown,
> implements MapAllInterface<RecordT, ValidatableT, MessageT> {
    constructor(
        public validators : RecordT,
        public validation : Function<[ReturnInfer<RecordT>], ValidatableT>,
        public message : Function<[ReturnInfer<RecordT>], MessageT>
    ) {
    }

    validate<Argument extends RecordBase<RecordT>>(
        argument: Argument
    ) : Return<RecordBase<RecordT>, Argument, RecordType<RecordT>, ValidatableMapCallback<MessageT, RecordT, ReturnInfer<RecordT>, ValidatableT, RecordBase<RecordT>>> {

        let handler = (value, validators) => ValidateMap(value, validators, false);

        return <Return<RecordBase<RecordT>, Argument, RecordType<RecordT>, ValidatableMapCallback<MessageT, RecordT, ReturnInfer<RecordT>, ValidatableT>>>
            new ValidatableMapCallback(argument, this.validators, handler, this.validation, this.message);
    }
}
