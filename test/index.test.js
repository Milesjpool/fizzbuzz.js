function getFizzBuzz(value) {
    if (value % 3 === 0 && value % 5 === 0) return "fizzbuzz";
    if (value === 5) return "buzz123";
    if (value === 3) return "fizz123";
    return value;
}

describe("fiz buzz", () => {
    it("returns fizz for multiples of 3 ", () => {
        let n = Math.floor(Math.random() * 1000);
        expect(getFizzBuzz(n * 3)).toContain("fizz");
    });

    it("returns buzz for 5", () => {
    let n = Math.floor(Math.random() * 1000);
        expect(getFizzBuzz(n* 5)).toContain("buzz");
    });

    it("returns fizzbuzz for multiples of 5 and 3", () => {
        let n = Math.floor(Math.random() * 1000);
        expect(getFizzBuzz(n * 3 * 5)).toEqual("fizzbuzz");
    });

    it("returns the value for non-multiples of 3", () => {
        expect(getFizzBuzz(2)).toEqual(2);
    });

    it("returns the value for non-multiples of 3", () => {
        expect(getFizzBuzz(2)).toEqual(2);
    });
})