import Suffix from "@dikac/t-string/suffix/suffix";
export default function MemoizeProperty(configuration?: Pick<PropertyDescriptor, 'configurable' | 'writable'> & Partial<Suffix>): MethodDecorator;
