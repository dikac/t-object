import SymbolType from "../../symbol/boolean/type";

export default function Type<Assumption extends PropertyKey>(value : any) : value is Assumption {

    switch (typeof value) {
        case "number" :
        case "string" :
            return true;
    }

    return SymbolType(value);

}
