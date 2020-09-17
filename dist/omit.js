/**
 * implementation of {@link globalThis.Omit}
 *
 * get new object from {@param object} except key in {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for exclusion
 */
export default function Omit(object, ...keys) {
    let result = {};
    for (let [property, value] of Object.entries(object)) {
        if (keys.includes(property)) {
            continue;
        }
        result[property] = value;
    }
    return result;
}
//# sourceMappingURL=omit.js.map