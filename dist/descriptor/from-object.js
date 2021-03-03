export default function FromObject(object, property) {
    // direct
    {
        let descriptor = Object.getOwnPropertyDescriptor(object, property);
        if (descriptor) {
            return descriptor;
        }
    }
    // prototype chain
    {
        for (object = Object.getPrototypeOf(object); object; object = Object.getPrototypeOf(object)) {
            let descriptor = Object.getOwnPropertyDescriptor(object, property);
            if (descriptor) {
                return descriptor;
            }
        }
    }
}
//# sourceMappingURL=from-object.js.map