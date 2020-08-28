import ValidatorSimple from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableMap from "../validatable/map";
import RecordBase from "./base/record/infer";
import RecordType from "./type/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";

export default interface Map<
    Container extends Record<any, Validator>,
    Result extends Record<any, Instance>,
    ValidatableT extends Validatable,
    MessageT,
> extends
    ValidatorSimple<
        RecordBase<Container>,
        RecordType<Container>,
        ValidatableMap<MessageT, Container, Result, ValidatableT, RecordBase<Container>>
    > ,
    Validation<(result:Result)=>ValidatableT> ,
    Validators<Container>,
    Message<(result:Result)=>MessageT>
{}




