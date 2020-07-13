import SymbolType from "../../symbol/boolean/symbol";

export default function Key<Assumption extends PropertyKey>(value : any) : value is Assumption {

    switch (typeof value) {
        case "number" :
        case "string" :
            return true;
    }

    return SymbolType(value);

}
