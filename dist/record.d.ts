declare type Record<Type, Key extends keyof any = keyof any> = globalThis.Record<Key, Type>;
export default Record;
