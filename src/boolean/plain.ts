import * as isPlainObject from "is-plain-object"

export default function Plain(value : any) : value is object {

    return isPlainObject(value);
}
