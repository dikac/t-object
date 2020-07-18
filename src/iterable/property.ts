/**
 * iterate {@param object} property
 */
export default function * Property<Property extends PropertyKey>(object : Record<Property, any>) : Iterable<Property> {

    for (const property in object) {

        yield property;
    }
}
