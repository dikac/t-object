import Map from "../../../../dist/message/message/record/map";
import Message from "@dikac/t-message/message";

it("force console log", () => {spyOn(console, 'log').and.callThrough();});

describe("compiler compatible", function() {

    describe("type equal", function() {

        let message =  {
            data1 : {message : '1'},
            data2 : {message : '2'},
            data3 : {message : '3'}
        }

        let result = Map(message)

        it("validate type", function() {

            let string : string;
            string = result.data1;
            string = result.data2;
            string = result.data3;

            try {
                // @ts-expect-error
                result.data4.message;
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }

        })

        it("invalid type", function() {

            let number : number;
            // @ts-expect-error
            number = result.data1.message;

            // @ts-expect-error
            number = result.data2.message;

            // @ts-expect-error
            number = result.data3.message;

            try {
                // @ts-expect-error
                result.data4.message;
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
        })
    });


    describe("type different", function() {

        describe("type explicit", function() {

            let message : {
                data1 : Message<number>,
                data2 : Message<number>,
                data3 : Message<number>
            } =  {
                data1 : {message : 1},
                data2 : {message : 1},
                data3 : {message : 1}
            }

            let result = Map(message)

            it("validate type", function() {

                let string : number;
                string = result.data1;
                string = result.data2;
                string = result.data3;

                try {
                    // @ts-expect-error
                    result.data4.message;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            })

            it("invalid type", function() {

                let number : number;
                // @ts-expect-error
                number = result.data1.message;

                // @ts-expect-error
                number = result.data2.message;

                // @ts-expect-error
                number = result.data3.message;

                try {
                    // @ts-expect-error
                    result.data4.message;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }

            });
        });

        describe("type implicit", function() {

            let message = {
                data1 : {message : 1},
                data2 : {message : 1},
                data3 : {message : 1}
            }

            let result = Map(message)

            it("valid type", function() {

                let string : number;
                string = result.data1;
                string = result.data2;
                string = result.data3;

                try {
                    // @ts-expect-error
                    result.data4.message;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            })

            it("invalid type", function() {

                let number : number;
                // @ts-expect-error
                number = result.data1.message;

                // @ts-expect-error
                number = result.data2.message;

                // @ts-expect-error
                number = result.data3.message;

                try {
                    // @ts-expect-error
                    result.data4.message;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            });
        });
    });
});

describe("type equal", function() {

    let message =  {
        data1 : {message : '1'},
        data2 : {message : '2'},
        data3 : {message : '3'}
    }

    let result = Map(message)

    it("validate type", function() {

        expect(result.data1).toBe(message.data1.message);
        expect(result.data2).toBe(message.data2.message);
        expect(result.data3).toBe(message.data3.message);

        try {
            // @ts-expect-error
            result.data4.message;
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    })
});


describe("type different", function() {

    let message = {
        data1 : {message : 10},
        data2 : {message : 20},
        data3 : {message : 30}
    }

    let result = Map(message)

    it("validate type", function() {

        expect(result.data1).toBe(message.data1.message);
        expect(result.data2).toBe(message.data2.message);
        expect(result.data3).toBe(message.data3.message);

        try {
            // @ts-expect-error
            result.data4.message;
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    })
});


describe("type different", function() {

    let message = {
        data1 : {message : 10},
        data2 : {message : 20},
        data3 : {
            message : {
                data2 : {message : 20},
                data3 : {message : 30}
            }
        }
    }

    let result = Map(message)

    it("validate type", function() {

        expect(result.data1).toBe(message.data1.message);
        expect(result.data2).toBe(message.data2.message);
        expect(result.data3).toBe(message.data3.message);

        try {
            // @ts-expect-error
            result.data4.message;
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    })
});
