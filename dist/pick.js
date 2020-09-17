/**
 * implementation of {@link globalThis.Pick}
 *
 * get value from {@param object} by {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for selection
 */
export default function Pick(object, ...keys) {
    const result = {};
    for (const property of keys) {
        result[property] = object[property];
    }
    return result;
}
//# sourceMappingURL=pick.js.map