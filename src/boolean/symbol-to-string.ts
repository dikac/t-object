
export default function SymbolToString(object : object): boolean {

    return typeof object[Symbol.toStringTag] === "function";
}

