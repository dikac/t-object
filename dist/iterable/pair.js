/**
 * iterate {@param object} property and value in array form
 */
export default function* Pair(object) {
    for (const property in object) {
        yield [property, object[property]];
    }
}
//# sourceMappingURL=pair.js.map