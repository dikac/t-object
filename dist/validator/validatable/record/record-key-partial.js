export default function RecordVKeyPartial(object, value) {
    let result = {};
    for (const k of Object.keys(object)) {
        const pair = value.validate(k);
        result[k] = pair;
        if (!pair.valid) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=record-key-partial.js.map