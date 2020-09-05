import GetDescriptor from "../../descriptor/boolean/getter";
import PropertyDescriptor from "../../descriptor/boolean/property";
import Descriptor from "../../descriptor/from-object";
import HasProperty from "./exists";

/**
 * check if property is readable
 */
export default function Readable (object : object, property : PropertyKey) : boolean {

    let descriptor = Descriptor(object, property);

    if(!descriptor) {

        return false;
    }

    if(HasProperty(descriptor, 'value')) {

        return true;
    }

    // getter
    if(GetDescriptor(descriptor)) {

        return true;
    }

    return false;
}
