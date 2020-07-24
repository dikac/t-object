import RecordParameter from "../../../record/validator/parameter/parameter";
import RecordValidatable from "./record";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
export default function Standard<Validators extends Record<PropertyKey, Validator>>(values: RecordParameter<Validators>, validators: Validators, stopOnInvalid: true): PartialUnion<Validators>;
export default function Standard<Validators extends Record<PropertyKey, Validator>>(values: RecordParameter<Validators>, validators: Validators, stopOnInvalid: false): RecordValidatable<Validators>;
