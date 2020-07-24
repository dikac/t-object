import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "../validatables/validatables";
import FunctionSingle from "@dikac/t-function/function-single";
export default class Validatables<Record extends globalThis.Record<PropertyKey, Validatable> = globalThis.Record<PropertyKey, Validatable>, Boolean extends boolean = boolean> implements Validatable, ValidatablesInterface<Record> {
    validatables: Record;
    validation: FunctionSingle<Record, Boolean>;
    constructor(validatables: Record, validation: FunctionSingle<Record, Boolean>);
    get valid(): Boolean;
}
