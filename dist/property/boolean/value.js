/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */
export default function Value(object, property, validation) {
    return validation(object[property]);
}
//# sourceMappingURL=value.js.map