export default function FromObject(object : object, property : PropertyKey) : undefined|PropertyDescriptor {

    // direct
    {
        let descriptor = Object.getOwnPropertyDescriptor(object, property);

        if(descriptor) {

            return descriptor;
        }
    }

    // prototype chain
    {
        for(object = Object.getPrototypeOf(object); object; object = Object.getPrototypeOf(object)) {

            let descriptor = Object.getOwnPropertyDescriptor(object, property);

            if(descriptor) {

                return descriptor;
            }
        }

    }
}
