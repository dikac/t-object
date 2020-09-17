export default function Property(message, property, delimiter = ' : ', conversion = (value) => value + '') {
    let string = property.toString() + delimiter + conversion(message.message);
    return { message: string };
}
//# sourceMappingURL=property.js.map