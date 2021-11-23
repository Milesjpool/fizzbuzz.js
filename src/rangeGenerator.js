function generateRange(startAt, stopAt) {
    const length = 1 + stopAt - startAt
    return [...Array(length).keys()].map(i => i + startAt);
}

module.exports = { generateRange };