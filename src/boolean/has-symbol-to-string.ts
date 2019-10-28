
export default function HasSymbolToString(object : object): boolean {

    return typeof object[Symbol.toStringTag] === "function";
}

