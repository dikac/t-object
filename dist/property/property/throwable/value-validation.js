import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
export default function PropertyValue(data) {
    let message = PropertyValueArgumentValidation(false, data.property, data.value, Name(data.validation));
    return new Error(message);
}
//# sourceMappingURL=value-validation.js.map