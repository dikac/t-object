import PropertyValueArgument from "../../../assert/string/value";
export default function Value(data) {
    return new Error(PropertyValueArgument(false, data.property, data.value));
}
//# sourceMappingURL=value.js.map