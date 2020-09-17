/**
 * Check if {@param value} is symbol
 * taken from {@link https://stackoverflow.com/questions/46479169/check-if-value-is-a-symbol-in-javascript}
 */
export default function Symbol(value) {
    return typeof value === 'symbol'
        || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
}
//# sourceMappingURL=symbol.js.map