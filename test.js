const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (Array.isArray(a)) {
        if (JSON.stringify(a) === JSON.stringify(b)) {
            return true
        } else {
            return false
        }
    }

    if (a === b) {
        return true
    } else {
        return false
    }
}

const flat = (arr, depth = 1) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (depth === 1) {
                newArr = newArr.concat(arr[i])
            } else {
                newArr = newArr.concat(flat(arr[i], depth--))
            }
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr
}

// [1, 2, 3, 4]

t(({ eq }) => eq(flat([1]), [1]))
t(({ eq }) => eq(flat([1, [2]]), [1, 2]))
t(({ eq }) => eq(flat([1, [2, [3]]]), [1, 2, [3]]))
t(({ eq }) => eq(flat([1, [2, [3],
    [4, [5]]
]], 2), [1, 2, 3, 4, [5]]))
t(({ eq }) => eq(flat([1, [2, [3],
    [4, [5]]
]], 3), [1, 2, 3, 4, 5]))
t(({ eq }) => eq(flat([1, [2, [3],
    [4, [5]]
]], Infinity), [1, 2, 3, 4, 5]))




Object.freeze(tests)


let failed = false
let fails = []

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        failed = true
        fails.push(i)
    }
}

if (failed === true) {
    console.log(fails)
} else {
    console.log("ok")
}