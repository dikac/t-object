import Suffix from "@dikac/t-string/suffix/suffix";
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to property
 *
 * @param configuration
 * @default {suffix:'', configurable:true}
 */
export default function MemoizeMethod(configuration?: Pick<PropertyDescriptor, 'configurable'> & Partial<Suffix>): MethodDecorator;
