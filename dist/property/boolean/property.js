import SymbolType from "../../symbol/boolean/symbol";
/**
 * check if {@param value} is valid object key/property
 * @param value
 */
export default function Property(value) {
    switch (typeof value) {
        case "number":
        case "string":
            return true;
    }
    return SymbolType(value);
}
//# sourceMappingURL=property.js.map