import {Assign, OmitByValue} from "utility-types";

/**
 * assign all {@param source} value to all undefined value in {@param target}
 */
export default function Default<
    Destination extends object,
    Source extends object
>(
    target : Destination,
    source : Source
) : Assign<Source, OmitByValue<Destination, undefined>>
{

    for (let property in source) {

        // @ts-ignore
        if(target[property] === undefined) {

            // @ts-ignore
            target[property] = source[property];
        }
    }

    return <Assign<Source, OmitByValue<Destination, undefined>>>target;
}
