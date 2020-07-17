import RecursiveRecord from "../../../record/record";
import RecursiveInferArgument from "../../parameter/record/parameter";
import RecursiveInferReturn from "./validatable";
import Validator from "@dikac/t-validator/validator";
export default function Record<Validators extends RecursiveRecord<PropertyKey, Validator<unknown>>>(validators: Validators, values: RecursiveInferArgument<Validators>): RecursiveInferReturn<Validators>;
