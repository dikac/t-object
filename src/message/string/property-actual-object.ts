import Type from "@dikac/t-validatable/type/type";
import Value from "@dikac/t-value/value";
import PropertyInterface from "../../property/property";
import PropertyActual from "./property-actual";

export default function PropertyActualObject<P extends string|number>(data : Type & PropertyInterface<P> & Value<string>) : string {

    return PropertyActual(data.property, data.type, data.value);
}
