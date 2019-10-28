export default function HasSymbolIterator(object : object): boolean {

    return typeof object[Symbol.iterator] === "function";

}