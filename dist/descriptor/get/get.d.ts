import { Required } from "utility-types";
declare type Get = Required<Omit<PropertyDescriptor, 'value'>, 'get' | 'enumerable' | 'configurable'>;
export default Get;
