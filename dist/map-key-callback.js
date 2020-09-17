export default function MapKeyCallback(object, replace) {
    let result = {};
    for (const property in object) {
        const value = object[property];
        result[replace(property, value)] = value;
    }
    return result;
}
//# sourceMappingURL=map-key-callback.js.map