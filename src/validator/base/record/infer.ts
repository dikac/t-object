import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/base/infer";

type Infer<Schema extends Record<any, Validator>> = {
    [Key in keyof Schema] : InferArgument<Schema[Key]>
};


export default Infer;
