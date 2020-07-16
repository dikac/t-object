import Record from "../../../../record/recursive/record";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/infer/return";
declare type Return<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends Record<PropertyKey, Validator<any>> ? Return<Schema[Key]> : InferReturn<Schema[Key]>;
};
export default Return;
