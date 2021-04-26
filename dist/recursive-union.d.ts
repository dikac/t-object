import { O } from "ts-toolbelt";
declare type RecursiveUnion<Type> = Type extends object ? O.UnionOf<{
    [Key in keyof Type]: Type[Key] extends object ? RecursiveUnion<Type[Key]> : Type[Key];
}> : Type;
export default RecursiveUnion;
