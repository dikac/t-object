import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer";
import InferBase from "@dikac/t-validator/base/infer";

type Infer<Schema extends Record<any, Validator>> = {
    [Key in keyof Schema]  : InferReturn<Schema[Key]>
};

export default Infer;

