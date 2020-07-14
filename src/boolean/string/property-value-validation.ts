import PropertyValue from "./property-value";

export default function PropertyValueValidation(valid : boolean, property : PropertyKey, type : string, validation : string) : string {

    let message = PropertyValue(valid, property, type);
    return `${message}, against "${validation}"`;

}
