import PropertyValueValidationMessage from "../string/value-validation";
export default function ValueValidation(property, type, validation) {
    return new Error(PropertyValueValidationMessage(false, property, type, validation));
}
//# sourceMappingURL=value-validation.js.map