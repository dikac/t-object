/**
 * check if property exists
 */
export default function Property (object : object, property : PropertyKey) : boolean {

     return property in object;
}
