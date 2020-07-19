import Recursive from "../../../recursive/recursive";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import ValuePartial from "./value-partial";

export default function Value<
    Val,
    Validators extends Recursive<PropertyKey, Validator<Val>>
>(
    validators : Validators,
    value : Val
) : RecursiveInferReturn<Validators> {

    return  <RecursiveInferReturn<Validators>> ValuePartial(validators, value, false)
}
