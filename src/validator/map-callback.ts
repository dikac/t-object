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
    Container extends Record<any, Validator> = Record<PropertyKey, Validator>,
    Result extends Record<any, Instance> = Record<PropertyKey, Instance>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> implements Map <Container, Result, ValidatableT, MessageT> {
    constructor(
        public validators : Container,
        public map : (record:RecordParameter<Container>, validators : Container)=>Result,
        public validation : (result:Result)=>ValidatableT,
        public message : (result:Result)=>MessageT
    ) {
    }

    validate<Argument extends RecordType<Container>>(
        argument: Argument
    ) : ValidatableReplace<ValidatableMapInterface<MessageT, Container, Result, ValidatableT, Argument>, true>;

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) : Simple<RecordBase<Container>, Argument, RecordType<Container>, ValidatableMapInterface<MessageT, Container, Result, ValidatableT, RecordBase<Container>>>;

    validate<Argument extends RecordBase<Container>>(
        argument: Argument
    ) {

        return new ValidatableMapCallback(argument, this.validators, this.map, this.validation, this.message) as
            ValidatableReplace<ValidatableMapInterface<MessageT, Container, Result, ValidatableT, Argument>, true>;
    }
}



