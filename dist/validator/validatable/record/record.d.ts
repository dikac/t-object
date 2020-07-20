import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/validatable";
declare type Record<Schema extends globalThis.Record<PropertyKey, Validator>> = {
    [Key in keyof Schema]: InferReturn<Schema[Key]>;
};
export default Record;
