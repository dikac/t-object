/**
 * Check if {@param value} key and value valid according to {@param validation}
 * {@param validation} value is used for check {@param value} under the same property name
 */
export default function Map(value, validation) {
    for (let property in validation) {
        let validator = validation[property];
        if (!validator(value[property])) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=map.js.map