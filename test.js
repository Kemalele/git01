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


const vowels = /[AEIOUaeiou]/g

const vowelDots = (str) => {
    let newstr = ''
    for (let i = 0; i < str.length; i++) {
        newstr+=str[i]
        if (vowels.test(str[i])) {
            newstr+='.'
        }
    }
    return newstr
}

console.log(vowelDots('something'))

t(({ eq }) => vowels.test('a') && !vowels.test('c'))
t(({ eq }) => eq(vowelDots('something'), 'so.me.thi.ng'))
t(({ eq }) => eq(vowelDots(''), ''))
t(({ eq }) => eq(vowelDots('rhythm'), 'rhythm'))
t(({ eq }) => eq(vowelDots('Algorithm'), 'A.lgo.ri.thm'))

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