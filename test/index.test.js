function getFizzBuzz(value) {
    return value == 3 ? "fizz" : undefined;
}

describe("fiz buzz", () => {
    it("runs a test", () =>{
        expect(1).toEqual(1);
    });

    it("returns fizz for 3", () => {
        expect(getFizzBuzz(3)).toEqual("fizz");
    });

    it("doesn't returns fizz for non-multiples of 3", () => {
        expect(getFizzBuzz(2)).not.toEqual("fizz");
    });
})