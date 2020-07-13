import PropertyInterface from "../property/property";
import Type from "@dikac/t-type/type";

export default function Property(data : PropertyInterface & Type<string>) : string {

    let name = data.property.toString();

    return `property '${name}' expect '${data.type}'`
}
