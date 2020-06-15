import { Required } from "utility-types";
declare type Set = Required<Omit<PropertyDescriptor, 'value'>, 'set' | 'enumerable' | 'configurable'>;
export default Set;
