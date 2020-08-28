import SymbolType from "../../symbol/boolean/symbol";

export default function Property(
    value : unknown
) : value is PropertyKey {

    switch (typeof value) {
        case "number" :
        case "string" :
            return true;
    }

    return SymbolType(value);
}
