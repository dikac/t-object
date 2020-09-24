import Callbacks from "@dikac/t-validator/callbacks";
import RecordValueCallback from "../../../dist/validator/record-key-callback";
import ValidateKey from "../../../dist/validator/validatable/record/record-key";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import Infer from "@dikac/t-validator/validatable/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let validator = new Callbacks<string, string>( function (value) {
    return  ['name', 'address'].includes(value);
}, function (result){
    return result.value + ' ' + (result.valid ? 'valid' : 'true');
},);

let value = {
    name : 'string',
    age : 1,
    address : 'string',
};

let property = new RecordValueCallback<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateKey, And, MessageMap);

it(`and validation`, () => {

    let and = property.validate(value);

    expect<boolean>(and.valid).toBe(false);

    expect(and.validatables.name.valid).toBe(true);
    expect(and.validatables.name.message).toBe('name valid');

    expect(and.validatables.age.valid).toBe(false);
    expect(and.validatables.age.message).toBe('age true');

    expect(and.validatables.address.valid).toBe(true);
    expect(and.validatables.address.message).toBe('address valid');

    expect(and.value).toBe(value);
});


it(`or validation `, () => {

    property.validation = (v)=>Or(v);

    let or = property.validate(value);

    expect(or.valid).toBe(true);
    expect(or.value).toBe(value);

    expect(or.validatables.name.message).toBe('name valid');
    expect(or.validatables.name.valid).toBe(true);

    expect(or.validatables.age.message).toBe('age true');
    expect(or.validatables.age.valid).toBe(false);

    expect(or.validatables.address.message).toBe('address valid');
    expect(or.validatables.address.valid).toBe(true);

});
