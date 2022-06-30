const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", ()=> {
    describe("Addition function", ()=> {
        test("Should return 42 for 20 + 22", ()=> {
            expect(addition(20,22)).toBe(42);
        });
        test("Should return 20 for 10 + 10", ()=> {
            expect(addition(10,10)).toBe(20);
        });
    });
    describe("Subtraction function", ()=> {

    });
    describe("Multiply function", ()=> {

    });
    describe("Division function", ()=> {

    });
})