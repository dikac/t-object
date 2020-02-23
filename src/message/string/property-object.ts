import Type from "@dikac/t-validatable/type/type";
import PropertyInterface from "../../property/property";
import Property from "./property";

export default function PropertyObject<P extends string|number>(data : Type & PropertyInterface<P>) : string {

    return Property(data.property, data.type);
}
