/**
 * remove undefined from {@param object}
 * @param object
 */
export default function OmitUndefined(object) {
    for (let property in object) {
        if (object[property] === undefined) {
            delete object[property];
        }
    }
    return object;
}
//# sourceMappingURL=omit-undefined.js.map