const { getRandomInt } = require("./utils.js");
const { fizzy, buzzy } = require("../src/conditions.js");

describe("fizzy", () => {
    const condition = fizzy;
    const interval = 3;
    it("returns true for multiples of 3", () => {
        expect(condition(getRandomInt() * interval)).toBeTruthy();
    })

    it("returns false for non multiples of 3", () => {
        for (let i = 1; i < interval; i++ ) {
            const input = (getRandomInt() * interval) + i;
            expect(condition(input)).toBeFalsy();
        }
    })
});

describe("buzzy", () => {
    const condition = buzzy;
    const interval = 5;
    it("returns true for multiples of 5", () => {
        expect(condition(getRandomInt() * interval)).toBeTruthy();
    })

    it("returns false for non multiples of 5", () => {
        for (let i = 1; i < interval; i++ ) {
            const input = (getRandomInt() * interval) + i;
            expect(condition(input)).toBeFalsy();
        }
    })
});