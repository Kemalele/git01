const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const eqArr = (a,b) => {
    if (a.length != b.length) {
        return false
    }
    for (let i = 0; i < a.length;i++) {
        if (a[i] != b[i]) {
            return false
        }
    }

    return true
}

const join = (arr,splitter) => {
    let res = ''

    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
        if (i != arr.length -1 ) {
            res += splitter
        }
    }

    return res
}



    t(() => join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,')
    t(() => join(['ggg', 'ddd', 'b'], ' - ') === 'ggg - ddd - b')
    t(() => join(['a', 'b', 'c'], ' ') === 'a b c')

Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]())
    } else {
        console.log('ok')
    }
}