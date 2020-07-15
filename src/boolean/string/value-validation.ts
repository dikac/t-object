import Value from "./value";

export default function ValueValidation(valid : boolean, property : PropertyKey, type : string, validation : string) : string {

    let message = Value(valid, property, type);
    return `${message}, against "${validation}"`;

}
