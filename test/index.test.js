const { executeFizzBuzz } = require("../index.js");

describe("executeFizzBuzz", () => {
    it("evaluates resolver over provided range", () => {
        const range = [1, 2, 3];
        const resolver = jest.fn();
        const outStream = { log: jest.fn() };

        executeFizzBuzz(range, resolver, outStream);
        expect(resolver.mock.calls).toEqual([[1],[2],[3]]);
    })

    it("logs resolved range of values", () => {
        const range = [1, 2, 3];
        const resolver = (v) => `out${v}`;
        const outStream = { log: jest.fn() };

        executeFizzBuzz(range, resolver, outStream);
        expect(outStream.log.mock.calls).toEqual([["out1"], ["out2"], ["out3"]])
    })
})