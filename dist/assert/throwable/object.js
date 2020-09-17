import StringType from "../string/object";
export default function Object_(string, subject = 'type', conversion = value => typeof value) {
    return new Error(StringType(false, string, subject, conversion));
}
//# sourceMappingURL=object.js.map