import SetGetter from "../value/value/set-getter";
import Default from "../default";
const defaults = { suffix: '', configurable: true };
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to property
 *
 * @param configuration
 * @default {suffix:'', configurable:true}
 */
export default function MemoizeAccessor(configuration = defaults) {
    configuration = Default(configuration, defaults);
    return function (target, property, descriptor) {
        const symbol = Symbol(property + configuration.suffix);
        Object.defineProperty(target, symbol, descriptor);
        descriptor.get = function () {
            return SetGetter(this, property, this[symbol], configuration.configurable);
        };
    };
}
//# sourceMappingURL=memoize-accessor.js.map