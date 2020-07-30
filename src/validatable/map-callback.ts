import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import PartialUnion from "../map-partial";
import Message from "@dikac/t-message/message";
import MapPartialUnion from "../map-partial-union";
import RecordValidatable from "../validator/return/record/record";
import RecordParameter from "../validator/parameter/record/record";


export default class ValueCallback<
    MessageT = unknown,
    Container extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends
        MapPartialUnion<globalThis.Record<PropertyKey, ValidatableInterface & Message>> =
        MapPartialUnion<globalThis.Record<PropertyKey, ValidatableInterface & Message>>,
    Validatable extends ValidatableInterface = ValidatableInterface
> implements ValueInterface<RecordParameter<Container>> , ValidatableInterface, Validatables<Result> {

    readonly validatables : Result;
    readonly valid : boolean;
    readonly validatable : Validatable;
    readonly message : MessageT;
    readonly messages : Result;

    constructor(
        readonly value: RecordParameter<Container>,
        public validators : Container,
        public handler : Function<[RecordParameter<Container>, Container], Result>,
        public validation : Function<[Result], Validatable>,
        message : Function<[Result], MessageT>,
    ) {

        this.validatables = this.handler(value, this.validators);
        this.messages = this.validatables;

        this.validatable = this.validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}
