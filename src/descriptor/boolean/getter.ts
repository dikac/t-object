import Method from "../../boolean/method";
import GetterInterface from "../getter";
import BooleanType from "@dikac/t-boolean/boolean";

export default function Getter(value : PropertyDescriptor) : value is GetterInterface {

    return Method(value, 'get');
}
