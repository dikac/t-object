import ObjectRecord from "../../recursive";
import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/parameter/parameter";

type Parameter<Schema extends ObjectRecord<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends ObjectRecord<PropertyKey, Validator<unknown>> ? Parameter<Schema[Key]> : InferArgument<Schema[Key]>
};

export default Parameter;
