import Suffix from "@dikac/t-string/suffix/suffix";
export default function MemoizeAccessor(configuration?: Pick<PropertyDescriptor, 'configurable'> & Partial<Suffix>): MethodDecorator;
