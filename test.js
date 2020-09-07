const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

let smalls = Number.NEGATIVE_INFINITY
let biggie = Number.POSITIVE_INFINITY

// bigger
t(() => typeof biggie !== 'undefined')
t(() => biggie > 1.7976931348623157e308)

// smaller
t(() => typeof smalls !== 'undefined')
t(() => smalls < -1.7976931348623157e308)

Object.freeze(tests)
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]())
}