import {Required} from "utility-types";
import Methods from "./methods";
import Type from "./type";

export type PropertyDescriptorGetter = Required<Omit<PropertyDescriptor,'value'>,'get'|'enumerable'|'configurable'>

export default function DescriptorGetter(value : object) : value is PropertyDescriptorGetter {

    if(!Type<PropertyDescriptorGetter>(value)) {
;
        return false;
    }

    if(!Methods(value, 'get')) {

        return false;
    }

    if(value.enumerable !== false) {

        return false
    }

    if(value.configurable !== true) {

        return false
    }

    return true;
}