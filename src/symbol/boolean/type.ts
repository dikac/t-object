/**
 * Check if {@param value} is symbol
 * taken from {@link https://stackoverflow.com/questions/46479169/check-if-value-is-a-symbol-in-javascript}
 */

export default function Type (value : any) : value is Symbol {
    return typeof value === 'symbol'
        || typeof value === 'object' && Object.prototype.toString.call (value) === '[object Symbol]';
}
