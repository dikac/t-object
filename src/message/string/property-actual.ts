import Property from "./property";

export default function PropertyActual(property : string|number, type : string, value : string) : string {

    return Property(property, type) + `, actual '${value}'`
}
