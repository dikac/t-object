import Is from "./is";

export default function NotNull<Guard extends object>(value : any) : value is Guard {

    return Is(value) && value !== null;
}