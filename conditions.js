const fizzy = (v) => (v % 3 == 0)
const buzzy = (v) => (v % 5 == 0)
const fizzBuzzy = (v) => fizzy(v) && buzzy(v)

module.exports = {
    fizzy,
    buzzy,
    fizzBuzzy,
}