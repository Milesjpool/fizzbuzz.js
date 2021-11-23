
const { fizzy, buzzy } = require("./conditions.js");

const createResolver = (condition, resolve, next) => (v) => condition(v) ? resolve : next(v);

const fizzBuzzyResolver = (next) => createResolver((v) => fizzy(v) && buzzy(v), "FizzBuzz", next);
const fizzyResolver = (next) => createResolver(fizzy, "Fizz", next);
const buzzyResolver = (next) => createResolver(buzzy, "Buzz", next);
const baseResolver = () => (v) => `${v}`;
const defaultFizzBuzzResolver = () => fizzBuzzyResolver(fizzyResolver(buzzyResolver(baseResolver())));

module.exports = {
    fizzBuzzyResolver,
    fizzyResolver,
    buzzyResolver,
    baseResolver,
    defaultFizzBuzzResolver
}