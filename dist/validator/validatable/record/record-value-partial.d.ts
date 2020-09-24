import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import { O } from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer";
export default function RecordValue<RecordType extends Record<PropertyKey, any>, Value extends Validator<O.UnionOf<RecordType>>>(object: RecordType, value: Value): Partial<MapInterface<RecordType, Return<Value>>>;
