import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import InferReturn from "./infer";

export default function MapPartial<
    Validators extends Record<PropertyKey, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators,
) : PartialUnion<InferReturn<Validators>> {

    let object = {};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        object[<PropertyKey>property] = validator.validate(value);

        if(!object[<PropertyKey>property].valid) {

            return object;
        }
    }

    return <InferReturn<Validators>> object;
}
