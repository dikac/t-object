import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
export default function PropertyValue(data: PropertyInterface & Value<string> & Validation<any[]>): Error;
