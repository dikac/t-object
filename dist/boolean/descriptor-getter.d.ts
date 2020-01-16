import { Required } from "utility-types";
export declare type PropertyDescriptorGetter = Required<Omit<PropertyDescriptor, 'value'>, 'get' | 'enumerable' | 'configurable'>;
export default function DescriptorGetter(value: object): value is PropertyDescriptorGetter;
