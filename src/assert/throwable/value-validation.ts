import PropertyValueValidationMessage from "../string/value-validation";

export default function ValueValidation(property : PropertyKey, type : string, validation : string) : Error {

    return new Error(
        PropertyValueValidationMessage(false, property, type, validation)
    );
}
