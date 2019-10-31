export default function SymbolIterator(object : object): boolean {

    return typeof object[Symbol.iterator] === "function";

}