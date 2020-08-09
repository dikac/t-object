import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/base/infer";
declare type Infer<Schema extends Record<keyof Schema, Validator>> = {
    [Key in keyof Schema]: InferArgument<Schema[Key]>;
};
export default Infer;
