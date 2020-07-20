import Type from "../../../../dist/validatable/recursive/boolean/recursive";
import And from "../../../../dist/recursive/validatable/and";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function () {

    let record = {
        valid :  {valid:true},
        invalid :  {valid:false},
    };

    let object : object = record;

    it('check result', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('explicit', () => {

        if(Type(object)) {

            let boolean : boolean;
            boolean = object.valid.valid;
            boolean = object.invalid.valid;

            try {

                boolean = object.invalid1.valid;
                fail('object.invalid1 shlud not exists');
            } catch (e) {
                expect(e).toBeInstanceOf(Error)
            }


        } else {

            fail('type guard must be valid');
        }
    })

    it('implicit', () => {

        if(Type<typeof record>(object)) {

            let boolean : boolean;
            boolean = object.valid.valid;
            boolean = object.invalid.valid;

            try {
                // @ts-expect-error
                boolean = object.invalid1.valid;
                fail('object.invalid1 shlud not exists');
            } catch (e) {
                expect(e).toBeInstanceOf(Error)
            }


        } else {

            fail('type guard must be valid');
        }
    })
});

describe('valid single dimension', function () {

    let record = {
        valid :  {valid:true},
        invalid :  {valid:false},
    };

    let object : object = record;

    it('check result', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('compiler pass', () => {

        if(Type(object)) {

            expect(object.valid.valid).toBeTrue();
            expect(object.invalid.valid).toBeFalse();
        }
    })
});

describe('invalid single dimension', function () {

    let record = {
        valid :  {valid:true},
        invalid : {valid:false},
        wrong : 1
    };

    let object : object = record;

    it('check result', () => {

        let result = Type(object);
        expect(result).toBeFalse();
    })

});


describe('valid multi dimension', function () {


    let record = {
        valid :  {valid:true},
        invalid : {valid:false},
        valids : new And({
            valid1 :  {valid:true},
            valid2 :  {valid:true},
        }),
        invalids : new And({
            invalid1 : {valid:false},
            invalid2 : {valid:false},
        }),
        mixed : new And({
            valid :  {valid:true},
            invalid : {valid:false},
        })
    };

    let object : object = record;


    it('valid', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('compiler pass', () => {

        if(Type(object)) {

            expect(object.valid.valid).toBeTrue();

            expect(object.invalid.valid).toBeFalse();

            expect(object.valids.valid).toBeTrue();

            expect(object.invalids.valid).toBeFalse();

            expect(object.mixed.valid).toBeFalse();

        }
    })
})
