import Validator from "@dikac/t-validator/validator";
import InferType from "@dikac/t-validator/type/infer";

type Infer<Schema extends Record<keyof Schema, Validator>> = {
    [Key in keyof Schema] : InferType<Schema[Key]>
};

export default Infer;
