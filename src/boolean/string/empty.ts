import Name from "../../string/name";

export default function Empty(valid : boolean, value : object) : string {

    let string = Name(value);

    if(valid) {

        return `value "${string}" is empty object`;

    } else {

        return `value "${string}" is not empty object`;
    }
}
