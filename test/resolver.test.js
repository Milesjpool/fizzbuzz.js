const { fizzBuzzy, fizzy, buzzy } = require("../conditions.js");
const { resolveFizzBuzz, defaultResolvers } = require("../resolver.js");

describe("resolveFizzBuzz", () => {
    it("returns the input as a string if no resolvers match", () => {
        const resolvers = []
        const input = Math.floor(Math.random() * 1000);
        expect(resolveFizzBuzz(input, resolvers)).toEqual(`${input}`);
    })

    it("returns the value of the first matched resolver", () => {
        const resolvers = [
            {condition: () => false, value: "A"},
            {condition: () => true, value: "B"},
            {condition: () => false, value: "C"}
        ]
        const input = Math.floor(Math.random() * 1000);
        expect(resolveFizzBuzz(input, resolvers)).toEqual("B");
    })
})

describe("defaultResolvers", () => {
    it("resolves fizzBuzz first", () => {
        expect(defaultResolvers[0].condition).toEqual(fizzBuzzy)
    });

    it("resolves fizzBuzzy numbers to FizzBuzz", () => {
        const resolver = defaultResolvers.find(r => r.condition === fizzBuzzy);
        const expected = "FizzBuzz"
        expect(resolver.value).toEqual(expected)
    });

    it("resolves fizzy numbers to Fizz", () => {
        const resolver = defaultResolvers.find(r => r.condition === fizzy);
        const expected = "Fizz"
        expect(resolver.value).toEqual(expected)
    });

    it("resolves buzzy numbers to Buzz", () => {
        const resolver = defaultResolvers.find(r => r.condition === buzzy);
        const expected = "Buzz"
        expect(resolver.value).toEqual(expected)
    });
})