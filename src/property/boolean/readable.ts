import Property from "./property";
import GetDescriptor from "../../descriptor/boolean/getter";
import PropertyDescriptor from "../../descriptor/boolean/property";
import Descriptor from "../../descriptor/from-object";

/**
 * check if property is readable
 */
export default function Readable (object : object, property : PropertyKey) : boolean {

    let descriptor = Descriptor(object, property);

    if(!descriptor) {
        return false;
    }

    // property
    // all descriptor property must true
    if(PropertyDescriptor(descriptor)) {

        return true;
    }

    // setter
    if(GetDescriptor(descriptor)) {

        return true;
    }

    return false;
}
