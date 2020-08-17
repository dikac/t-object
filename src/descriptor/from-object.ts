export default function FromObject(object : object, property : PropertyKey) : undefined|PropertyDescriptor {

    // direct
    {
        let descriptor = Object.getOwnPropertyDescriptor(object, property);

        if(descriptor) {

            return descriptor;
        }
    }

    // prototype
    {
        let prototype = Object.getPrototypeOf(object);

        let descriptor = Object.getOwnPropertyDescriptor(prototype, property);

        if(descriptor) {

            return descriptor;
        }
    }
}
