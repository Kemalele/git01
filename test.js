const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const max = (a, b) => a > b ? a : b
const min = (a, b) => a < b ? a : b

t(() => max(0, -2) === 0)
t(() => max(-1, 10) === 10)
t(() => max(-13.2, -222) === -13.2)
t(() => max(132, 133) === 133)

t(() => min(0, -2) === -2)
t(() => min(-1, 10) === -1)
t(() => min(-13.2, -222) === -222)
t(() => min(132, 133) === 132)


Object.freeze(tests)
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]())
}