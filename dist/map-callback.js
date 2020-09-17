export default function MapCallback(object, replace) {
    let result = {};
    for (const property in object) {
        const value = object[property];
        result[property] = replace(value, property);
    }
    return result;
}
//# sourceMappingURL=map-callback.js.map