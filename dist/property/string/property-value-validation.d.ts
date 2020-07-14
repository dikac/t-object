import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
export default function PropertyValue(data: PropertyInterface & Value<string> & Validatable & Validation<any[]>): string;
