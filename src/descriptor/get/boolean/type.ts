import Method from "../../../boolean/method";
import ObjectType from "../../../boolean/type";
import Get from "../get";
import BooleanType from "@dikac/t-boolean/type";



export default function Type(value : object) : value is Get {

    if(!ObjectType<Get>(value)) {

        return false;
    }

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
