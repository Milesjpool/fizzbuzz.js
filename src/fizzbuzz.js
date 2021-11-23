const { defaultFizzBuzzResolver } = require("./resolvers.js");
const { generateRange } = require("./rangeGenerator.js")

function executeFizzBuzz(values = generateRange(1, 100), resolver = defaultFizzBuzzResolver(), outStream = console){
    values.forEach(v => {
        outStream.log(resolver(v))
    });
}

module.exports = { executeFizzBuzz };