import Name from "../../string/name";

export default function NotEmpty(valid : boolean, value : object) : string {

    let string = Name(value);

    if(valid) {

        return `value "${string}" is not empty object`;

    } else {

        return `value "${string}" must not empty object`;
    }
}
