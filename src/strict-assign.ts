/**
 * Strict assign
 *
 * @param object
 * @param data
 * @constructor
 */
export default function StrictAssign<O extends object, U extends {
    [Key in keyof O]: O[Key];
}>(object: O, data: U): U & Omit<O, keyof U>{

    return Object.assign(object, data);
}

