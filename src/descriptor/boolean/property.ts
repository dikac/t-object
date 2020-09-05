import HasProperty from "../../property/boolean/exists";
import BooleanType from "@dikac/t-boolean/boolean";

import PropertyInterface from "../property";

export default function Property(value : PropertyDescriptor) : value is PropertyInterface {

    if(!HasProperty(value, 'value')) {

        return false;
    }

    return true;
}
