/**
 * Check if {@param value} is object and not null
 *
 * {@template Assumption} can be used for type guard if object type is known
 */
export default function Object_(value) {
    if (value === null) {
        return false;
    }
    return typeof value === "object";
}
//# sourceMappingURL=object.js.map