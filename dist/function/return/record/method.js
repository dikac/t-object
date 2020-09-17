/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export default function Method(object, argument) {
    let result = {};
    for (const [property, value] of Object.entries(argument)) {
        result[property] = object[property](...value);
    }
    return result;
}
//# sourceMappingURL=method.js.map