import Record from "../record";
import ObjectType from "../../boolean/object";
import Property from "../infer/property";
import ValueValidation from "../../assert/throwable/value-validation";
import Name from "../../string/name";
import Guard from "@dikac/t-function/boolean/guard";

export default class Pair<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
> implements
    Iterable<[Property<Object>[], Type]>
{

    protected keys : PropertyKey[] = [];

    constructor(
        public record : Object,
        public validation : Guard<any, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<[Property<Object>[], Type]> {

        for(const property in this.record) {

            const value : Type = <Type>this.record[property];
            const properties = [...this.keys, property];

            if(this.validation(value)) {

                yield [<Property<Object>[]>properties, value];

            } else if(ObjectType(value)) {

                let recursive = new Pair(value, this.validation);
                recursive.keys.push(...properties);

                yield * recursive;

            } else {

                throw ValueValidation(properties.join('.'), 'valid', Name(this.validation))
            }
        }

    }
}
