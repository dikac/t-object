import Class from "@dikac/t-class/boolean/class";
import NameNotFound from "./name-not-found";

export default function Name(value : any) : string {

    let constructor : string|undefined;

    if(value && value.constructor && value.constructor.name) {

        constructor = value.constructor.name;
    }

    if(!constructor || constructor === 'Function') {

        if(Class(value)) {

            return value.name;
        }
    }

    if(constructor) {

        return constructor;
    }

    if(typeof value === "object") {

        return 'Object';
    }

    throw new Error(NameNotFound(false, value));
}
