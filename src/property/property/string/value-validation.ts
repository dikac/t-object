import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import PropertyValueArgumentValidation from "../../../boolean/string/value-validation";
import Validation from "@dikac/t-boolean/validation/validation";
import Name from "../../../string/name";

export default function PropertyValue(data : PropertyInterface & Value<string> & Validatable & Validation<any[]>) : string {

    return PropertyValueArgumentValidation(
        data.valid,
        data.property,
        data.value,
        Name(data.validation)
    );
}
