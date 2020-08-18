import Infer from "./infer";
import {O} from "ts-toolbelt";
import MapSingle from "../../parameter/record/map-single";

/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */

export default function MethodSingle<
    Argument extends object,
    Type extends MapSingle<Argument>,
>(
    object : Type,
    argument : Argument
) : O.Pick<Infer<Type>, keyof Argument> {

    let result = {};

    for (const [property, value] of Object.entries(argument)) {

        result[property] = object[property](value);
    }

    return <O.Pick<Infer<Type>, keyof Argument>> result;
}

