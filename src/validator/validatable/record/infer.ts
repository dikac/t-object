import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer";

type Infer<Schema extends Record<any, Validator>/*, Argument extends Base, Base extends InferBaseRecord<Schema>*/> = {
    [Key in keyof Schema]  : InferReturn<Schema[Key]/*, Argument[Key], InferBaseRecord<Schema>*/>
};

export default Infer;

