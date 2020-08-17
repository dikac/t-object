import Method from "../../boolean/method";
import ObjectType from "../../boolean/object";
import SetterInterface from "../setter";
import BooleanType from "@dikac/t-boolean/boolean";

export default function Setter(value : PropertyDescriptor) : value is SetterInterface {

    if(!Method(value, 'set')) {

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
