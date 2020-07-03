import Type from "@dikac/t-type/type";
import Value from "@dikac/t-value/value";
import PropertyInterface from "../property/property";
export default function PropertyActual(data: PropertyInterface & Type<string> & Value<string>): string;
