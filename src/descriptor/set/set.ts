import {Required} from "utility-types";

type Set = Required<Omit<PropertyDescriptor,'value'>,'set'|'enumerable'|'configurable'>

export default Set;
