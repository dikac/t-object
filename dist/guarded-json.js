/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */
export default function GuardedJson(json, validator, error = (json, object) => new TypeError('json string is not valid according to validator'), preprocess) {
    let string = json.toString();
    let object = JSON.parse(string);
    if (preprocess) {
        preprocess(object);
    }
    if (validator(object)) {
        return object;
    }
    throw error(string, object);
}
//# sourceMappingURL=guarded-json.js.map