import Record from "../../../..//record/recursive/record";
import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/infer/argument";

type Argument<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends Record<PropertyKey, Validator<unknown>> ? Argument<Schema[Key]> : InferArgument<Schema[Key]>
};

export default Argument;
