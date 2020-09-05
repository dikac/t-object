import {Object} from "ts-toolbelt";

type Setter = Object.Required<Omit<PropertyDescriptor,'value'>,'set'>

export default Setter;
