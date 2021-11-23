const { getRandomInt } = require("./utils.js");
const { fizzBuzzyResolver, fizzyResolver, buzzyResolver, baseResolver, defaultFizzBuzzResolver } = require("../src/resolvers.js");

describe("defaultFizzBuzzResolver", () => {
    const resolver = defaultFizzBuzzResolver();
    it("returns FizzBuzz for multiples of 3 and 5", () => {
        const input = getRandomInt() * 3 * 5;
        expect(resolver(input)).toEqual("FizzBuzz");
    })

    it("returns Fizz for multiples of 3", () => {
        const input = (getRandomInt() * 3 * 5) + 3;
        expect(resolver(input)).toEqual("Fizz");
    })


    it("returns Buzz for multiples of 5", () => {
        const input = (getRandomInt() * 3 * 5) + 5;
        expect(resolver(input)).toEqual("Buzz");
    })
})


describe("fizzBuzzyResolver", () => {
    const interval = 3 * 5;
    const resolver = fizzBuzzyResolver(() => "next");

    it("returns FizzBuzz for multiples of 3 and 5", () => {
        expect(resolver(getRandomInt() * interval)).toEqual("FizzBuzz");
    })

    it("delegates onwards for non multiples of 3 or 5", () => {
        for (let i = 1; i < interval; i++ ) {
            const input = (getRandomInt() * interval) + i;
            expect(resolver(input)).toEqual("next");
        }
    });
});

describe("fizzyResolver", () => {
    const interval = 3;
    const resolver = fizzyResolver(() => "next");

    it("returns Fizz for multiples of 3", () => {
        expect(resolver(getRandomInt() * interval)).toEqual("Fizz");
    })

    it("delegates onwards for non multiples of 3", () => {
        for (let i = 1; i < interval; i++ ) {
            const input = (getRandomInt() * interval) + i;
            expect(resolver(input)).toEqual("next");
        }
    })
});

describe("buzzyResolver", () => {
    const interval = 5;
    const resolver = buzzyResolver(() => "next");

    it("returns Buzz for multiples of 5", () => {
        expect(resolver(getRandomInt() * interval)).toEqual("Buzz");
    })

    it("delegates onwards for non multiples of 5", () => {
        for (let i = 1; i < interval; i++ ) {
            const input = (getRandomInt() * interval) + i;
            expect(resolver(input)).toEqual("next");
        }
    })
});

describe("baseResolver", () => {
    const resolver = baseResolver();

    it("returns stringified number", () => {
        const input = getRandomInt();
        expect(resolver(input)).toEqual(`${input}`);
    })
});