const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}
const abs = (num) => num === 0 ? 0 : num > 0 ? num : -num
const isPositive = (a) => a > 0 ? true : false

t(() => isPositive(3))
t(() => isPositive(1998790))
t(() => !isPositive(-1))
t(() => !isPositive(-0.7))
t(() => !isPositive(-787823))
t(() => !isPositive(0))

t(({ eq }) => eq(abs(0), 0))
t(({ eq }) => eq(abs(-1), 1))
t(({ eq }) => eq(abs(-13.2), 13.2))
t(({ eq }) => eq(abs(132), 132))


Object.freeze(tests)
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]({ eq }))
}