import Validator from "@dikac/t-validator/validator";
import { Object } from "ts-toolbelt";
import RecordValidatable from "./record";
declare type PartialUnion<Validators extends Record<PropertyKey, Validator>> = Record<keyof Validators, Object.UnionOf<RecordValidatable<Validators>>> | RecordValidatable<Validators> | Partial<RecordValidatable<Validators>>;
export default PartialUnion;
