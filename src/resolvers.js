
const { fizzy, buzzy } = require("./conditions.js");

const partialResolver = (condition, resolve) => (next) => (v) => condition(v) ? resolve : next(v);

const fizzBuzzyResolver = partialResolver((v) => fizzy(v) && buzzy(v), "FizzBuzz");
const fizzyResolver = partialResolver(fizzy, "Fizz");
const buzzyResolver = partialResolver(buzzy, "Buzz");
const baseResolver = () => (v) => `${v}`;
const defaultFizzBuzzResolver = () => fizzBuzzyResolver(fizzyResolver(buzzyResolver(baseResolver())));

module.exports = {
    fizzBuzzyResolver,
    fizzyResolver,
    buzzyResolver,
    baseResolver,
    defaultFizzBuzzResolver
}