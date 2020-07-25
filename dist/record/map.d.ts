/**
 * Convert recursive {@template Container} Value type to {@template Replace} type
 *
 * {@template Value} is required, while {@tempalte Key} is optional to use for distinguish condition recursive {@template Container}
 */
declare type MapPartial<Container extends Record<PropertyKey, unknown>, Replace> = {
    [K in keyof Container]: Replace;
};
export default MapPartial;
