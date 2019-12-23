/**
 * Strict assign
 *
 * @param object
 * @param data
 * @constructor
 *
 *
 * example to enforce optional type
 * StrictAssign(new Array(), <Array<any>>{length:5});
 */
export default function StrictAssign<O extends object, U extends {
    [Key in keyof O] : O[Key]
}>(object : O, data : U) : U & O {

    return Object.assign(object, data);
}



