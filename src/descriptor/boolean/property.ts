import HasProperty from "../../property/boolean/property";
import BooleanType from "@dikac/t-boolean/boolean";

import PropertyInterface from "../property";

export default function Property(value : PropertyDescriptor) : value is PropertyInterface {

    if(!BooleanType(value.enumerable)) {

        return false
    }

    if(!BooleanType(value.configurable)) {

        return false
    }

    if(value.writable !== true) {

        return false
    }

    if(!HasProperty(value, 'value')) {

        return false;
    }

    return true;
}
