/**
 * iterate {@param object} property
 */
export default function * Property<Property extends string|symbol|number>(object : Record<Property, any>) : Iterable<Property> {

    for (const property in object) {

        yield property;
    }
}
