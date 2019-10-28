export default function Is<Guard extends object>(value : any) : value is Guard {

    return typeof value === "object";
}