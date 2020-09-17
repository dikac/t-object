/**
 * iterate {@param object} value
 */
export default function* Value(object) {
    for (const property in object) {
        yield object[property];
    }
}
//# sourceMappingURL=value.js.map