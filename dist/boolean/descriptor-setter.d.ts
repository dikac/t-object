import { Required } from "utility-types";
export declare type PropertyDescriptorSetter = Required<Omit<PropertyDescriptor, 'value'>, 'set' | 'enumerable' | 'configurable'>;
export default function DescriptorSetter(value: object): value is PropertyDescriptorSetter;
