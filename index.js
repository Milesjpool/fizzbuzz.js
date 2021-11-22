const { resolveFizzBuzz } = require("./resolver.js");
const { generateRange } = require("./rangeGenerator.js")

function executeFizzBuzz(values = generateRange(1, 100), resolver = resolveFizzBuzz, outStream = console){
    values.forEach(v => {
        outStream.log(resolver(v))
    });
}

module.exports = { executeFizzBuzz };