import RecursiveRecord from "../../../recursive/recursive";
import RecursiveInferArgument from "../../parameter/recursive/recursive";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import MapPartial from "./map-partial";

export default function Map<
    Validators extends RecursiveRecord<PropertyKey, Validator<unknown>>
>(
    validators : Validators,
    values : RecursiveInferArgument<Validators>
) : RecursiveInferReturn<Validators> {

    return  <RecursiveInferReturn<Validators>> MapPartial(validators, values, false);
}
