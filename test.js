const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (Array.isArray(a)) {
        return eqArr(a,b)
    }

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

const ionOut = (str) => {
    let reg = /[\w]+(?<=t)(?=ion)/g
    if (str.match(reg) === null) {
        return []
    }
    return str.match(reg)
}


t(({ eq }) => eq(ionOut('attention, direction'), ['attent', 'direct']))
t(({ eq }) => eq(ionOut('promotion, provision'), ['promot']))
t(({ eq }) => eq(ionOut('transfusion'), []))
t(({ eq }) =>
  eq(ionOut(' 1st position is the vision of the 2nd position'), [
    'posit',
    'posit',
  ]),
)


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