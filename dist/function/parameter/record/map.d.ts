/**
 * map record of parameters {@link any[]} to record of function with the same parameter
 */
declare type Map<Arguments extends Record<PropertyKey, unknown[]>> = {
    [Key in keyof Arguments]: (...args: Arguments[Key]) => any;
};
export default Map;
