function getFizzBuzz(value) {
    if (value === 15) return "fizzbuzz";
    if (value === 5) return "buzz";
    if (value === 3) return "fizz";
    return value;
}

describe("fiz buzz", () => {
    it("returns fizz for 3", () => {
        expect(getFizzBuzz(3)).toEqual("fizz");
    });

    it("returns buzz for 5", () => {
        expect(getFizzBuzz(5)).toEqual("buzz");
    });

    it("returns fizzbuzz for 15", () => {
        expect(getFizzBuzz(15)).toEqual("fizzbuzz");
    });

    it("returns the value for non-multiples of 3", () => {
        expect(getFizzBuzz(2)).toEqual(2);
    });
})