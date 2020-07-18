import Type from "../../../../dist/validatable/recursive/boolean/recursive";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


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
        valids : {
            valid1 :  {valid:true},
            valid2 :  {valid:true},
        },
        invalids : {
            invalid1 : {valid:false},
            invalid2 : {valid:false},
        },
        mixed : {
            valid :  {valid:true},
            invalid : {valid:false},
        }
    };

    let object : object = record;


    it('valid', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('compiler pass', () => {

        if(Type<typeof record, string>(object)) {

            expect(object.valid.valid).toBeTrue();
            expect(object.invalid.valid).toBeFalse();

            expect(object.valids.valid1.valid).toBeTrue();
            expect(object.valids.valid2.valid).toBeTrue();

            expect(object.invalids.invalid1.valid).toBeFalse();
            expect(object.invalids.invalid2.valid).toBeFalse();

            expect(object.mixed.valid.valid).toBeTrue();
            expect(object.mixed.invalid.valid).toBeFalse();

        }
    })
})

describe('invalid multi dimension', function () {


    let record = {
        valid :  {valid:true},
        invalid : {valid:false},
        valids : {
            valid1 :  {valid:true},
            valid2 : {valid:true},
        },
        invalids : {
            invalid1 : {valid:false},
            invalid2 : {valid:false},
        },
        mixed : {
            valid :  {valid:true},
            invalid : {valid:false},
            wrong : 2
        }
    };

    let object : object = record;



    it('valid', () => {

        let result = Type(object);
        expect(result).toBeFalse();
    })


})
