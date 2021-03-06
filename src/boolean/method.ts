/**
 * check if method or function exists
 */
export default function Method(object : object, property : PropertyKey) : boolean {

    return typeof object[property] === "function";
}
