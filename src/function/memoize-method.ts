import SetGetter from "../value/value/set-getter";
import Default from "../default";
import Suffix from "@dikac/t-string/suffix/suffix";
import SetProperty from "../value/value/set-property";
import SetMethod from "../value/value/set-method";

const defaults = {suffix:'', configurable:true}
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to property
 *
 * @param configuration
 * @default {suffix:'', configurable:true}
 */
export default function MemoizeAccessor(configuration : Pick<PropertyDescriptor, 'configurable'> & Partial<Suffix> = defaults) : MethodDecorator  {

    configuration = Default(configuration, defaults)

    return function (target, property: string, descriptor: PropertyDescriptor) {

        const symbol = Symbol(property + configuration.suffix);

        Object.defineProperty(target, symbol, descriptor);

        descriptor.value = function (...args) {

            return SetMethod(this, <any>property, this[symbol](args), false, configuration.configurable);

           // return SetGetter(this, <any>property, this[symbol], configuration.configurable);

        };
    };
}
