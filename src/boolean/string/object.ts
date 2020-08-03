export default function Object_(valid : boolean, value : unknown) : string {

    if(valid) {

        return `value is object`;

    } else {

        return `value is not object`;
    }
}
