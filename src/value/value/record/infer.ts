import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";

type Infer<Schema extends Record<PropertyKey, Value>> = {
    [Key in keyof Schema] : InferValue<Schema[Key]>
};


export default Infer;
