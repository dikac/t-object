import Empty from "../../dist/validator/empty";
import EmptyMessage from "../../dist/validatable/string/empty";
import Name from "../../dist/string/name";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<object, [boolean, string]>();
map.set({}, [true, 'empty object']);
map.set({a:1}, [false, 'not empty object']);
map.set([], [false, 'array']);


for(let [value, [valid, message]] of map) {

    describe('empty', () => {

        it(message, ()=>{

            let validator = new Empty(EmptyMessage);
            let validatable = validator.validate(value);
            expect(validatable.valid).toBe(valid);
            expect(validatable.value).toBe(value);

            if(validatable.valid) {
                expect(validatable.message).toBe(`"${Name(value)}" is empty object`);
            } else {
                expect(validatable.message).toBe(`"${Name(value)}" is not empty object`);
            }
        });

    });

}
