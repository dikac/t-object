import {Required} from "utility-types";
import {O} from "ts-toolbelt";
import Replace from "../../replace";

/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */

export default function Value<
    ObjectT extends object,
    Property extends keyof ObjectT,
    Type extends ObjectT[Property] = ObjectT[Property],
>(
    object : ObjectT,
    property : Property,
    validation : (value:ObjectT[Property])=>value is Type

) : object is {
    [Key in keyof ObjectT] : Key extends  Property ? (Type extends ObjectT[Key] ? Type : ObjectT[Key]) : ObjectT[Key]
}

export default function Value<
    Object extends object = object,
    Property extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    property : Property,
    validation : (value:unknown)=>value is Type
) : object is Object & {[Key in Property] : Type}

export default function Value<
    Object extends object = object,
    Property extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    property : Property,
    validation : (value:unknown)=>value is Type
) : object is Object & {[Key in Property] : Type} {

     return validation(object[<PropertyKey>property]);
}
