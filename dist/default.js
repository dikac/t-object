/**
 * assign all {@param source} value to all undefined value in {@param target}
 */
export default function Default(target, source) {
    for (let property in source) {
        // @ts-ignore
        if (target[property] === undefined) {
            // @ts-ignore
            target[property] = source[property];
        }
    }
    return target;
}
//# sourceMappingURL=default.js.map