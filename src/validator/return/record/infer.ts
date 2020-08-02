import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/return/infer";

type Infer<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema]  : InferReturn<Schema[Key]>
};

export default Infer;

