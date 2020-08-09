import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import { O } from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer";
export default function RecordValue<RecordT extends Record<PropertyKey, any>, Value extends Validator<O.UnionOf<RecordT>>>(object: RecordT, value: Value): MapInterface<RecordT, Return<Value>>;
