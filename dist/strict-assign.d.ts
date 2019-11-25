/**
 * Strict assign
 *
 * @param object
 * @param data
 * @constructor
 */
export default function StrictAssign<O extends object, U extends {
    [Key in keyof O]: ;
}>(object: O, data: U): U & O;
