const { generateRange } = require("../src/rangeGenerator.js");

describe("generateRange", () => {
    it("creates incrementing range of numbers", () => {
        expect(generateRange(1,5)).toEqual([1,2,3,4,5])
    })

    it("creates another incrementing range of numbers", () => {
        expect(generateRange(70,72)).toEqual([70, 71, 72 ])
    })
})