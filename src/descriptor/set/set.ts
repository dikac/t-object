import {Object} from "ts-toolbelt";

type Set = Object.Required<Omit<PropertyDescriptor,'value'>,'set'|'enumerable'|'configurable'>

export default Set;
