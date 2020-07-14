/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export default function PropertyValue(
    valid : boolean,
    property : PropertyKey,
    type : string
) : string {

    property = property.toString();

    if(valid) {

        return `property "${property}" value is "${type}"`;

    } else {

        return `property "${property}" value is not "${type}"`;
    }
}
