import PropertyInterface from "../property/property";
import Value from "@dikac/t-value/value";


export default function InvalidType(data : PropertyInterface & Value<string>) : string {

    return `property '${data.property.toString()}' value is invalid according to '${data.value}'`;
}
