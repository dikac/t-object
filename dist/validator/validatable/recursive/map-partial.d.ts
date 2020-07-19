import RecursiveRecord from "../../../recursive/recursive";
import RecursiveInferArgument from "../../parameter/recursive/recursive";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import { Object } from "ts-toolbelt";
export default function MapPartial<Validators extends RecursiveRecord<PropertyKey, Validator<unknown>>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopOnInvalid?: boolean): Object.Partial<RecursiveInferReturn<Validators>, 'deep'>;
