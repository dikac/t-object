import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/return/infer";

type Infer<Schema extends globalThis.Record<keyof any, Validator>> = {
    [Key in keyof Schema]  : InferReturn<Schema[Key]>
};

export default Infer;

