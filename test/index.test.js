function getFizzBuzz(value) {
    return value == 3 ? "fizz" : undefined;
}

describe("fiz buzz", () => {
    it("returns fizz for 3", () => {
        expect(getFizzBuzz(3)).toEqual("fizz");
    });

    it("doesn't returns fizz for non-multiples of 3", () => {
        expect(getFizzBuzz(2)).not.toEqual("fizz");
    });
})