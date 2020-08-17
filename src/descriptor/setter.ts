import {Object} from "ts-toolbelt";

type Setter = Object.Required<Omit<PropertyDescriptor,'value'>,'set'|'enumerable'|'configurable'>

export default Setter;
