import Property from "./property";
import Type from "@dikac/t-type/type";
import Value from "@dikac/t-value/value";
import PropertyInterface from "../property/property";

export default function PropertyActual(data : PropertyInterface & Type<string> & Value<string>) : string {

    return Property(data) + `, actual '${data.value}'`
}
