import Method from "../../boolean/method";
import SetterInterface from "../setter";

export default function Setter(value : PropertyDescriptor) : value is SetterInterface {

    return Method(value, 'set');
}
