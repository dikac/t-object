import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "./validatables/validatables";
import FunctionSingle from "@dikac/t-function/function-single";
export default class Validatables<RecordT extends Record<any, Validatable> = Record<PropertyKey, Validatable>, Boolean extends boolean = boolean> implements Validatable, ValidatablesInterface<RecordT> {
    validatables: RecordT;
    validation: FunctionSingle<RecordT, Boolean>;
    constructor(validatables: RecordT, validation: FunctionSingle<RecordT, Boolean>);
    get valid(): Boolean;
}
