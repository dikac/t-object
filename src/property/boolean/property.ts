/**
 * check if property exists
 */
export default function Property<
    ObjectT extends object,
    Key extends PropertyKey
>(
    object : ObjectT,
    property : Key
) : boolean {

     return property in object;
}

