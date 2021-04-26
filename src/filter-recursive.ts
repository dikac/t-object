import {O} from "ts-toolbelt";
import IsObject from "./boolean/object";
import {DeepPartial} from "utility-types";
import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";
import RecursiveUnion from "./recursive-union";

type Inferz<Type> = Type extends object ? O.UnionOf<{
    [Key in keyof Type] : Type[Key] extends object ? Inferz<Type[Key]> : Type[Key]
}> : Type;



type r = {
    a : string,
    b: string,
    c: {
        a : boolean,
        b: string,
        c: number,
    },
}


let c2 : Inferz<r> = '{}';
let c3 : Inferz<r> = 11;
let c4 : Inferz<r> = true;

type UnionRecursive<Type> = Type extends object ? UnionRecursive<O.UnionOf<Type>> : Type;

export default function FilterRecursive<
    Object extends Record<PropertyKey, any>
>(
    record : Object,
    filter : (value: RecursiveUnion<Object>|O.UnionOf<Object>, key:keyof Object)=>boolean,
) : DeepPartial<Object> {

    let result = {};

    for(const property in record) {

        let value : any = record[property];

        if(IsObject(value)) {

            value = FilterRecursive(value as any, filter)
        }

        if(filter(value, <keyof Object>property)) {

            result[<PropertyKey>property] = value;
        }
    }

    return result as DeepPartial<Object>;
}
