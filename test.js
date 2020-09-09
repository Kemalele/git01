const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const includes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true
        }
    }

    return false
}

t(() => lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 7)
t(() => lastIndexOf([0, 0, t, t], t) === 3)
t(() => lastIndexOf([0, 0, t, t], t, 3) === 3)
t(() => lastIndexOf([t, 0, 0, t], t, 2) === 0)
t(({ ctx }) => lastIndexOf(bigArray, ctx.rn) === ctx.rn + 999)
t(({ ctx }) => lastIndexOf(bigArray, {}) === -1)

Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]())
    } else {
        console.log('ok')
    }
}