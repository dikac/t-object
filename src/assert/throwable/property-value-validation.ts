import PropertyValueValidationMessage from "../../boolean/string/property-value-validation";

export default function PropertyValueValidation(property : PropertyKey, type : string, validation : string) : Error {

    return new Error(
        PropertyValueValidationMessage(false, property, type, validation)
    );
}
