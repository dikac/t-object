import Type from "@dikac/t-validatable/type/type";
import PropertyInterface from "../../property/property";
export default function PropertyObject<P extends string | number>(data: Type & PropertyInterface<P>): string;
