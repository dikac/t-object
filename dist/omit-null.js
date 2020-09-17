/**
 * remove null from {@param object}
 * @param object
 */
export default function OmitNull(object) {
    for (let property in object) {
        if (object[property] === null) {
            delete object[property];
        }
    }
    return object;
}
//# sourceMappingURL=omit-null.js.map