/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */
export default function GuardedJson<Type>(json: {
    toString: () => string;
} | string, validator: (object: any) => object is Type, error?: (json: string, object: object) => Error, preprocess?: (object: {
    [Key in keyof Type]: Type[Key];
}) => void): Type;
