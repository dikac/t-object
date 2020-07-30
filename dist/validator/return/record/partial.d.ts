import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/return/return";
declare type Partial<Schema extends globalThis.Partial<Record<PropertyKey, Validator>>> = {
    [Key in keyof Schema]?: InferReturn<Schema[Key]>;
};
export default Partial;
