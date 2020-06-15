/**
 * iterate {@param object} value
 */
export default function * Property<Value>(object : Record<any, Value>) : Iterable<Value> {

    for (const property in object) {

        yield object[property];
    }
}
