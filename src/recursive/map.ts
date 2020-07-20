/**
 * Convert recursive {@template Container} Value type to {@template Replace} type
 *
 * {@template Value} is required, while {@tempalte Key} is optional to use for distinguish condition recursive {@template Container}
 */
type Map<Replace, Value, Container extends Record<PropertyKey, Value> = Record<PropertyKey, Value>> = {
    [K in keyof Container]:  Replace
}

export default Map;
