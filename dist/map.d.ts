/**
 * Convert recursive {@template Container} Value type to {@template Replace} type
 *
 * {@template Value} is required, while {@tempalte Key} is optional to use for distinguish condition recursive {@template Container}
 */
declare type Map<Container extends Record<PropertyKey, any>, Replace> = {
    [K in keyof Container]: Replace;
};
export default Map;
