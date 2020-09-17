export default function ValuePartial(value, validators, stop = false) {
    let object = {};
    for (let property in validators) {
        const validator = validators[property];
        object[property] = validator.validate(value);
        if (object[property].valid === stop) {
            return object;
        }
    }
    return object;
}
//# sourceMappingURL=value-partial.js.map