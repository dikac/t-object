export default function Type<Assumption extends object>(value : any) : value is Assumption {

    if(value === null) {

        return false;
    }

    return typeof value === "object";
}