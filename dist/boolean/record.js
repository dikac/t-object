/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
export default function Record(object, value, property) {
    for (const [prop, val] of Object.entries(object)) {
        if (property) {
            if (!property(prop)) {
                return false;
            }
        }
        if (!value(val)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=record.js.map