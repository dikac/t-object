import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "./validatables/validatables";
export default class Validatables<RecordType extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>, Boolean extends boolean = boolean> implements Validatable, ValidatablesInterface<RecordType> {
    validatables: RecordType;
    validation: (value: RecordType) => Boolean;
    constructor(validatables: RecordType, validation: (value: RecordType) => Boolean);
    get valid(): Boolean;
}
