export default function FromJson<Type>(json: {
    toString: () => string;
} | string, validator: (object: any) => object is Type, error: ((json: string, object: object) => Error) | undefined, preprocess: (object: {
    [Key in keyof Type]: Type[Key];
}) => void): Type;
