import Validator from "@dikac/t-validator/validator";
import Partial from "./partial";
import { Object } from "ts-toolbelt";
import RecordValidatable from "./record";
declare type PartialUnion<Validators extends Record<PropertyKey, Validator>> = Partial<Validators> | Record<PropertyKey, Object.UnionOf<RecordValidatable<Validators>>> | RecordValidatable<Validators>;
export default PartialUnion;
