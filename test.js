const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
        if (a === b) {
            return true
        } else {
            return false
        }
    }
    /////////////////

const slice = (arg, startAt = 0, endAt = arg.length) => {
    if (startAt < 0) {
        startAt = arg.length + startAt
    }

    if (endAt < 0) {
        endAt = arg.length + endAt
    }

    let res

    if (Array.isArray(arg)) {
        res = []
    } else {
        res = ''
    }

    for (let i = startAt; i < endAt; i++) {
        if (Array.isArray(arg)) {
            res.push(arg[i])
        } else {
            res += arg[i]
        }
    }

    return res
}


// handle String
t(() => slice('abcdef', 2) === 'cdef')
t(() => slice('abcdef', -2) === 'ef')
t(() => slice('abcdef', 0, 2) === 'ab')
t(() => slice('abcdef', 0, -2) === 'abcd')
t(() => slice('abcdef', 2, 4) === 'cd')
t(() => slice('abcdef', -3, -1) === 'de')
    // handle Array
t(({ eq }) => eq(slice([1, 2, 3, 4, 5, 6], 2), [3, 4, 5, 6]))
t(({ eq }) => eq(slice([1, 2, 3, 4, 5, 6], -2), [5, 6]))
t(({ eq }) => eq(slice([1, 2, 3, 4, 5, 6], 0, 2), [1, 2]))
t(({ eq }) => eq(slice([1, 2, 3, 4, 5, 6], 0, -2), [1, 2, 3, 4]))
    // t(({ eq }) => eq(slice([1, 2, 3, 4, 5, 6], 2, 4), [3, 4]))
    // t(({ eq }) => eq(slice([1, 2, 3, 4, 5, 6], -3, -1), [4, 5]))
console.log(slice([1, 2, 3, 4, 5, 6], 2))
console.log(slice([1, 2, 3, 4, 5, 6], -2))
console.log(slice([1, 2, 3, 4, 5, 6], 0, 2))

console.log(slice([1, 2, 3, 4, 5, 6], 0, -2))


console.log(slice([1, 2, 3, 4, 5, 6], 2, 4))
console.log(slice([1, 2, 3, 4, 5, 6], -3, -1))

Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]())
    } else {
        console.log('ok')
    }
}