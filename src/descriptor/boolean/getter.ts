import Method from "../../boolean/method";
import GetterInterface from "../getter";
import BooleanType from "@dikac/t-boolean/boolean";

export default function Getter(value : PropertyDescriptor) : value is GetterInterface {

    if(!Method(value, 'get')) {

        return false;
    }

    if(!BooleanType(value.enumerable)) {

        return false
    }

    if(value.configurable !== true) {

        return false
    }

    return true;
}
