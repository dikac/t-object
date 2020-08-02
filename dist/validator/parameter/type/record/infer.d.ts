import Validator from "@dikac/t-validator/validator";
import InferType from "@dikac/t-validator/parameter/type/infer";
declare type Infer<Schema extends globalThis.Record<PropertyKey, Validator>> = {
    [Key in keyof Schema]: InferType<Schema[Key]>;
};
export default Infer;
