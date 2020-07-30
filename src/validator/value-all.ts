import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValueInterface from "@dikac/t-value/value";
import ValidateValue from "./return/record/value";
import MapPartialUnion from "../map-partial-union";
import Message from "@dikac/t-message/message";
import Typeof from "@dikac/t-type/validator/type-standard";
import Validatables from "../validatable/validatables/validatables";
import InferReturn from "@dikac/t-validator/return/return";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValueCallback from "../validatable/value-callback";
import MapReturn from "./return/record/record";


type Return<Val, Container extends Record<keyof any, Validator>, MessageT> =
    ValueInterface<Val> &
    ValidatableInterface &
    Validatables<MapReturn<Container>> &
    Message<MessageT>
;


export default class ValueCallback<
    Val = unknown,
    MessageT = unknown,
    Container extends Record<any, Validator<Val>> = Record<any, Validator<Val>>,
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    Val,
    ValidatableValueCallback<Val, MessageT, Container, MapReturn<Container>, Validatable>
> {
    constructor(
        public validators : Container,
        public validation : Function<[MapReturn<Container>], Validatable>,
        public message : Function<[MapReturn<Container>], MessageT>
    ) {
    }

    validate(argument: Val) : ValidatableValueCallback<Val, MessageT, Container, MapReturn<Container>, Validatable> {


        let handler = (value, validators) => ValidateValue(value, validators, false);

        return <any> new ValidatableValueCallback(argument, this.validators, <any>handler, this.validation, this.message);
    }
}

