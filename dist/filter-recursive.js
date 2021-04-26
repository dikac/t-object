import IsObject from "./boolean/object";
let c2 = '{}';
let c3 = 11;
let c4 = true;
export default function FilterRecursive(record, filter) {
    let result = {};
    for (const property in record) {
        let value = record[property];
        if (IsObject(value)) {
            value = FilterRecursive(value, filter);
        }
        if (filter(value, property)) {
            result[property] = value;
        }
    }
    return result;
}
//# sourceMappingURL=filter-recursive.js.map