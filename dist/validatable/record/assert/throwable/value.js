import ValueMessage from "../../boolean/string/value";
export default function Value(property, error = (property) => new Error(property)) {
    return error(ValueMessage(false, property));
}
//# sourceMappingURL=value.js.map