import Validator from "@dikac/t-validator/validator";
import { Object } from "ts-toolbelt";
import RecordValidatable from "./infer";
declare type PartialUnion<Validators extends Record<any, Validator>> = Record<keyof Validators, Object.UnionOf<RecordValidatable<Validators>>> | RecordValidatable<Validators> | Partial<RecordValidatable<Validators>>;
export default PartialUnion;
