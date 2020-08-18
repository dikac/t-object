import Function from "@dikac/t-function/function-single";

/**
 * map record of parameter to record of function with the same parameter
 */
type MapSingle<Arguments extends object> = {
    [Key in keyof Arguments] :  Function<Arguments[Key], any>
}
export default MapSingle;
