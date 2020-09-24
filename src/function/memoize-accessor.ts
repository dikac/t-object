import SetGetter from "../value/value/set-getter";
import Default from "../default";
import Suffix from "@dikac/t-string/suffix/suffix";

const defaults = {suffix:'', configurable:true}

export default function MemoizeAccessor(configuration : Pick<PropertyDescriptor, 'configurable'> & Partial<Suffix> = defaults) : MethodDecorator  {

    configuration = Default(configuration, defaults)

    return function (
        target,
        property: string,
        descriptor: PropertyDescriptor
    ) {

        const symbol = Symbol(property + configuration.suffix);

        Object.defineProperty(target, symbol, descriptor);

        descriptor.get = function () {

            return SetGetter(this, <any>property, this[symbol], configuration.configurable);

        };
    };
}
