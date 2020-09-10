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

const nasa = (N) => {
    let res = ''

    for (let i = 1; i <= N;i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res += 'NASA'
        } else if (i % 5 === 0) {
            res += 'SA'
        }  else if (i % 3 === 0) {
            res += 'NA'
        } else {
            res += i.toString()
        }

        if (i != N) {
            res += ' '
        }
    }
    
    return res
}

console.log(nasa(15) === '1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA')
console.log(nasa(15))
Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]({eq}))
    } else {
        console.log('ok')
    }
}