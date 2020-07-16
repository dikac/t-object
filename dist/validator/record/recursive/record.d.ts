import RecursiveRecord from "../../../record/recursive/record";
import RecursiveInferArgument from "./infer/argument";
import RecursiveInferReturn from "./infer/return";
import Validator from "@dikac/t-validator/validator";
export default function Record<Validators extends RecursiveRecord<PropertyKey, Validator<unknown>>>(validators: Validators, values: RecursiveInferArgument<Validators>): RecursiveInferReturn<Validators>;
