import { List } from "ts-toolbelt";
export default function Omit<ObjectT extends object, Keys extends (keyof ObjectT)[]>(object: ObjectT, ...keys: Keys): Omit<ObjectT, List.UnionOf<Keys>>;
