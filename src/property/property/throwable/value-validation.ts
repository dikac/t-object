import PropertyValueArgumentValidation from "../../../boolean/string/value-validation";
import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import Name from "../../../string/name";

export default function PropertyValue(
    data : PropertyInterface & Value<string> & Validation<any[]>
) : Error {

    let message = PropertyValueArgumentValidation(false, data.property, data.value, Name(data.validation));
    return new Error(message);
}
