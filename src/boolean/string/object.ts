export default function Object_(valid : boolean, value : unknown) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is object`;

    } else {

        return `value "${string}" is not object`;
    }
}
