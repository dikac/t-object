import Property from "../property";
export default function Type<Assumption extends Property>(value: any): value is Assumption;
