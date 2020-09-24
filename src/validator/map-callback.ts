import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./base/record/infer";
import Map from "./map";
import ValidatableMapInterface from "../validatable/map";
import ValidatableMapCallback from "../validatable/map-callback";
import RecordBase from "./base/record/infer";
import RecordType from "./type/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Simple from "@dikac/t-validator/validatable/simple";

export default class MapCallback<
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> implements Map <Container, Result, ValidatableType, MessageType> {
    constructor(
        public validators : Container,
        public map : (record:RecordParameter<Container>, validators : Container)=>Result,
        public validation : (result:Result)=>ValidatableType,
        public message : (result:Result)=>MessageType
    ) {
    }

    validate<Argument extends RecordType<Container>>(
        argument: Argument
    ) : ValidatableReplace<ValidatableMapInterface<MessageType, Container, Result, ValidatableType, Argument>, true>;

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) : Simple<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapInterface<MessageType, Container, Result, ValidatableType, RecordBase<Container>>>;

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) {

        return new ValidatableMapCallback(argument, this.validators, this.map, this.validation, this.message) as
            ValidatableReplace<ValidatableMapInterface<MessageType, Container, Result, ValidatableType, Argument>, true>;
    }
}



