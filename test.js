const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const modulo = (a, b) => {
    let res = 0
    let isNegative = false
    if (a < b && a > 0) {
        return a
    }

    if (a < 0) {
        a = -a
        isNegative = true
    }

    if (b < 0) {
        b = -b
    }

    for (let i = a; i >= b; i -= b) {
        res = i
    }
    res = res - b
    if (isNegative) {
        res = -res
    }
    return res
}

t(() => modulo(34, 78) === 34)
t(() => modulo(78, 34) === 10)
t(() => modulo(123, 22) === 13)
t(() => modulo(123, -22) === 13)
t(() => modulo(-123, 22) === -13)
t(() => modulo(-123, -22) === -13)

console.log(modulo(-123, 22))
Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i])
    } else {
        console.log('ok')
    }
}