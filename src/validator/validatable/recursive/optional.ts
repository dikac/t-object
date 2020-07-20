import ObjectRecord from "../../../recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/validatable";

type Optional<Schema extends ObjectRecord<PropertyKey, Validator>> = {
    [Key in keyof Schema] ?: Schema[Key] extends ObjectRecord<PropertyKey, Validator<any>> ? Optional<Schema[Key]> : InferReturn<Schema[Key]>
};

export default Optional;
