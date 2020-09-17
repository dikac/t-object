export default function MapPartial(values, validators) {
    let object = {};
    for (let property in validators) {
        const validator = validators[property];
        const value = values[property];
        object[property] = validator.validate(value);
        if (!object[property].valid) {
            return object;
        }
    }
    return object;
}
//# sourceMappingURL=map-partial.js.map