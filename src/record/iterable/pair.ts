import ObjectType from "../../boolean/object";
import Property from "../property/property";
import ValueValidation from "../../assert/throwable/value-validation";
import Name from "../../string/name";
import Fns from "@dikac/t-function/function-single";

export default class Pair<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
> implements
    Iterable<[Property<Object>[], Type]>
{

    protected keys : PropertyKey[] = [];

    constructor(
        public record : Object,
        public validation : Fns<any, boolean>,
    ) {

    }

    * [Symbol.iterator](): Iterator<[Property<Object>[], Type]> {

        for(const property in this.record) {

            const value = this.record[property];
            const properties = [...this.keys, property];

            if(this.validation(value)) {

                yield [
                    <Property<Object>[]>properties,
                    <Type>value
                ];

            } else if(ObjectType<Object>(value)) {

                let recursive = new Pair(value, this.validation);
                recursive.keys.push(...properties);

                yield * <Iterable<[Property<Object>[], Type]>>recursive;

            } else {

                throw ValueValidation(properties.join('.'), 'valid', Name(this.validation))
            }
        }

    }
}
