import ObjectRecord from "../../../recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/infer/argument";

type Recursive<Schema extends ObjectRecord<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends ObjectRecord<PropertyKey, Validator<unknown>> ? Recursive<Schema[Key]> : InferArgument<Schema[Key]>
};

export default Recursive;
