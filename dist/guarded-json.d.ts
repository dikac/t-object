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
} | string, validator: (value: unknown) => value is Type, error?: (json: string, object: object) => Error, preprocess?: (result: {
    [Key in keyof Type]: Type[Key];
}) => void): Type;
