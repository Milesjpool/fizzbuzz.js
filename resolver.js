
const { fizzy, buzzy, fizzBuzzy } = require("./conditions.js");

const fizzBuzzyResolver = { condition: fizzBuzzy, value: "FizzBuzz" };
const fizzyResolver = { condition: fizzy, value: "Fizz" };
const buzzyResolver = { condition: buzzy, value: "Buzz" };
const defaultResolver = { condition: () => true, value: "Buzz" };

const defaultResolvers = [
    fizzBuzzyResolver,
    fizzyResolver,
    buzzyResolver,
]

function resolveFizzBuzz(value, resolvers = defaultResolvers) {
    let resolution = resolvers.find(r => r.condition(value));
    return resolution ? resolution.value : `${value}`;
}

module.exports = {
    defaultResolvers,
    resolveFizzBuzz
}