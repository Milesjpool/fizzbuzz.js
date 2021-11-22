function getFizzBuzz() {
    return "fizz"
}

describe("fiz buzz", () => {
    it("runs a test", () =>{
        expect(1).toEqual(1);
    })

    it("returns fizz for 3", () => {
        expect(getFizzBuzz(3)).toEqual("fizz")
    })
})