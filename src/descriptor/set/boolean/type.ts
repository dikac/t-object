import Method from "../../../boolean/method";
import ObjectType from "../../../boolean/type";
import Set from "../set";
import BooleanType from "@dikac/t-boolean/type";



export default function Type(value : object) : value is Set {

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
