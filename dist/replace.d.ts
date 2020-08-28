declare type Replace<Object extends any, Property extends keyof Object, Replace extends any> = {
    [Key in keyof Object]: Key extends Property ? Replace : Object[Key];
};
export default Replace;
