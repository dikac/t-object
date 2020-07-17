import Record from "../../../record/record";
import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/infer/argument";

type Parameter<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends Record<PropertyKey, Validator<unknown>> ? Parameter<Schema[Key]> : InferArgument<Schema[Key]>
};

export default Parameter;
