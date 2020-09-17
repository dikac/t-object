/**
 * iterate {@param object} property
 */
export default function* Property(object) {
    for (const property in object) {
        yield property;
    }
}
//# sourceMappingURL=property.js.map