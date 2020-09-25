import Suffix from "@dikac/t-string/suffix/suffix";
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to another getter
 *
 * @param configuration
 * @default {suffix:'', configurable:true, writable:true}
 */
export default function MemoizeProperty(configuration?: Pick<PropertyDescriptor, 'configurable' | 'writable'> & Partial<Suffix>): MethodDecorator;
