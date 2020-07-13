import Method from "../../../boolean/method";
import ObjectType from "../../../boolean/object";
import Set from "../set";
import BooleanType from "@dikac/t-boolean/boolean";

export default function Descriptor(value : object) : value is Set {

    if(!ObjectType<Set>(value)) {

        return false;
    }

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
