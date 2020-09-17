import Value from "./value";
export default function ValueValidation(valid, property, type, validation) {
    let message = Value(valid, property, type);
    return `${message}, against "${validation}"`;
}
//# sourceMappingURL=value-validation.js.map