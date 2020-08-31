import ValueMessage from "../../../../assert/string/value";

export default function Value(valid: boolean, property: PropertyKey) {

    return ValueMessage(valid, property, 'Validator or record of Validator')
}
