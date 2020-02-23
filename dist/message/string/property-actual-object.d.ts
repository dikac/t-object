import Type from "@dikac/t-validatable/type/type";
import Value from "@dikac/t-value/value";
import PropertyInterface from "../../property/property";
export default function PropertyActualObject<P extends string | number>(data: Type & PropertyInterface<P> & Value<string>): string;
