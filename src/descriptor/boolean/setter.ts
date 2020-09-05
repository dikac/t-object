import Method from "../../boolean/method";
import SetterInterface from "../setter";
import BooleanType from "@dikac/t-boolean/boolean";

export default function Setter(value : PropertyDescriptor) : value is SetterInterface {

    return Method(value, 'set');
}
