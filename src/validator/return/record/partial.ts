import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer";
import InferBase from "@dikac/t-validator/base/infer";

type Partial<Schema extends globalThis.Partial<Record<keyof Schema, Validator>>> = {
    [Key in keyof Schema] ? :  InferReturn<Schema[Key]>
};

export default Partial;
