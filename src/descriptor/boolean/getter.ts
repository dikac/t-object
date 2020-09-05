import Method from "../../boolean/method";
import GetterInterface from "../getter";

export default function Getter(value : PropertyDescriptor) : value is GetterInterface {

    return Method(value, 'get');
}
