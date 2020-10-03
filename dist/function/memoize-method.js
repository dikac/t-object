import Default from "../default";
import SetMethod from "../value/value/set-method";
const defaults = { suffix: '', configurable: true };
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to property
 *
 * @param configuration
 * @default {suffix:'', configurable:true}
 */
export default function MemoizeMethod(configuration = defaults) {
    configuration = Default(configuration, defaults);
    return function (target, property, descriptor) {
        const symbol = Symbol(property + configuration.suffix);
        Object.defineProperty(target, symbol, descriptor);
        descriptor.value = function (...args) {
            return SetMethod(this, property, this[symbol](args), false, configuration.configurable);
            // return SetGetter(this, <any>property, this[symbol], configuration.configurable);
        };
    };
}
//# sourceMappingURL=memoize-method.js.map