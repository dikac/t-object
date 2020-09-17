import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
export default function PropertyValue(data) {
    return PropertyValueArgumentValidation(data.valid, data.property, data.value, Name(data.validation));
}
//# sourceMappingURL=value-validation.js.map