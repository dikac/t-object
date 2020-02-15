import * as IsEmptyObject from "is-empty-object";

export default function Empty(value : any) : value is object {

    return IsEmptyObject(value);
}
