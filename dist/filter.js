export default function Filter(record, filter) {
    let result = {};
    for (const property in record) {
        const value = record[property];
        if (filter(value, property)) {
            result[property] = value;
        }
    }
    return result;
}
//# sourceMappingURL=filter.js.map