import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer";
export default function RecordValue<RecordType extends Record<PropertyKey, any>, Value extends Validator<keyof RecordType>>(object: RecordType, value: Value): MapInterface<RecordType, Return<Value>>;
