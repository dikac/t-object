import Record from "../../../record/record";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/infer/return";
declare type Validatable<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends Record<PropertyKey, Validator<any>> ? Validatable<Schema[Key]> : InferReturn<Schema[Key]>;
};
export default Validatable;
