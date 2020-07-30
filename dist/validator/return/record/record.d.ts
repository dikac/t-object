import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/return/return";
declare type Record<Schema extends globalThis.Record<keyof any, Validator>> = {
    [Key in keyof Schema]: InferReturn<Schema[Key]>;
};
export default Record;
