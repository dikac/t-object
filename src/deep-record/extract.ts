import Type from "../boolean/type";
import Empty from "../boolean/empty";
import {ValuesType, $ElementType} from "utility-types";
import DeepRecord from "./deep-record";

/**
 *
 *
 * @param object
 * @param property
 * @constructor
 */


// type RE<V, DR extends DeepRecord<any>> = {
//     [Key in keyof DR] :  V extends infer U  ? V : RE<V, DR[Key] extends infer U ? DR[Key] : never>
// }


type Convert<V, C extends object> = {
    [Key in keyof C] : V
}

// {
//     let original = {
//         data1 : 1,
//         data2 : 1,
//
//     };
//
//
//     let converted : Convert<string, typeof original> = {
//         data1: '1',
//         data2: '2',
//
//     };
// }

// type Convert2<V, R, O extends DeepRecord<R>> = {
//     [K in keyof O]: O[K] extends V ? V : Convert2<V, R, O[K] extends DeepRecord<R> ? O[K] : never >// : V
// }

 export type Return<Replace, Type, Container extends DeepRecord<Type>> = {
    [Key in keyof Container]: Container[Key] extends DeepRecord<Type> ? Return<Replace, Type, Container[Key]>  : Replace
}

interface Data {
    data : number,
}
{
    let original :
    {
        data1 : Data,
        data2 : Data,
        data3 : {
            data1 : Data,
            data2 : Data,
            data3 : {
                data1 : Data,
                data2 : Data,
            }
        }
    }
     = {
        data1 : {data:1},
        data2 : {data:1},
        data3 : {
            data1 : {data:1},
            data2 : {data:1},
            data3 : {
                data1 : {data:1},
                data2 : {data:1},
            }
        }
    };

    let converted : Return<string, Data, typeof original> = {
        data1: '1',
        data2: '2',
        data3 : {
            data1 : 'a',
            data2 : 'a',
            data3 : {
                data1 : 'a',
                data2 : 'a',
            }
        }
    };
}

// {
//     let original = [
//         1,2,3,[4,5]
//     ];
//
//
//
//     let converted : Convert2<string, number, DeepRecord<number>> = [
//         '1','2','3',['4','5']
//     ];
// }


export default function Extract<Value, Key extends keyof Value, Container extends DeepRecord<Value>>(object : Container, property : Key) : Return<Value[Key], Value, Container> {


    let result : DeepRecord<Value[Key]> = {};

    for(let prop in object) {

        const value = object[prop];

        if(property in value) {

            // @ts-ignore
            result[prop] = value[property];

        } else if(Type(value)) {

            // @ts-ignore
            const val = Extract(value, property);

            if(!Empty(val)) {

                result[prop] = val;
            }

        } else {

            throw new Error(`property ${property} is not exists in given object`)
        }
    }

    return <Return<Value[Key], Value, Container>> result;
}
