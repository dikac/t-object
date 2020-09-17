export default function RecordValue(object, value) {
    let result = {};
    for (const [k, v] of Object.entries(object)) {
        const pair = value.validate(v);
        result[k] = pair;
        if (!pair.valid) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=record-value-partial.js.map