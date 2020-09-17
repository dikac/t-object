import HasProperty from "../../property/boolean/exists";
export default function Property(value) {
    if (!HasProperty(value, 'value')) {
        return false;
    }
    return true;
}
//# sourceMappingURL=property.js.map