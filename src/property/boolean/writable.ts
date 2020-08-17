import SetDescriptor from "../../descriptor/boolean/setter";
import PropertyDescriptor from "../../descriptor/boolean/property";
import Descriptor from "../../descriptor/from-object";

/**
 * check if property is writable
 */
export default function Writable (object : object, property : PropertyKey) : boolean {

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
    if(SetDescriptor(descriptor)) {

        return true;
    }

    return false;
}
