import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/parameter/parameter";

type Parameter<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferArgument<Schema[Key]>
};

export default Parameter;
