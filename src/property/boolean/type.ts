import Property from "../property";
import SymbolType from "../../symbol/boolean/type";

export default function Type<Assumption extends Property>(value : any) : value is Assumption {

    switch (typeof value) {
        case "number" :
        case "string" :
            return true;
    }

    return SymbolType(value);

}
