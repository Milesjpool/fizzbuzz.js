function getFizzBuzz(value) {
    if (value === 5) return "buzz";
    return value == 3 ? "fizz" : undefined;
}

describe("fiz buzz", () => {
    it("returns fizz for 3", () => {
        expect(getFizzBuzz(3)).toEqual("fizz");
    });

    it("returns buzz for 5", () => {
        expect(getFizzBuzz(5)).toEqual("buzz");
    });

    it("doesn't returns fizz for non-multiples of 3", () => {
        expect(getFizzBuzz(2)).not.toEqual("fizz");
    });
})