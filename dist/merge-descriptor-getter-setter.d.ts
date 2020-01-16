import { PropertyDescriptorSetter } from "./boolean/descriptor-setter";
import { PropertyDescriptorGetter } from "./boolean/descriptor-getter";
export default function MergeDescriptorGetterSetter(descriptor1: PropertyDescriptorGetter | PropertyDescriptorSetter, descriptor2: PropertyDescriptorGetter | PropertyDescriptorSetter): PropertyDescriptorGetter | PropertyDescriptorSetter | (PropertyDescriptorGetter & PropertyDescriptorSetter);
