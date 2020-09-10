const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}


const trunc = (num) => {
    if (Number.isInteger(num)) {
        return num
    }
    let isNegative
    let realNumber

    if (num < 0) {
        isNegative = true
        num = -num
    }

    realNumber = num % 1

    num -= realNumber
    if (isNegative) {
        num = -num
    }
    return num
}

console.log(
    trunc(13.37),    // 13
    trunc(42.84),    // 42
    trunc(0.123),    //  0
    trunc(-0.123),   // -0
)

Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]())
    } else {
        console.log('ok')
    }
}