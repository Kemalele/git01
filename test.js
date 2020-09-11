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
const normal = RegExp("hi")
const begin = RegExp("^hi")
const end = RegExp("hi$")
const beginEnd = RegExp("^hi$")

// t(() => normal.test('hi'))
// t(() => normal.test('higher'))
// t(() => !normal.test('likelihood'))
// t(() => !normal.test('Hi'))
// t(() => normal.test('I love sushi'))

// t(() => begin.test('hi'))
// t(() => begin.test('higher'))
// t(() => begin.test('hired'))
// t(() => !begin.test('likelihood'))
// t(() => !begin.test('Hi'))
// t(() => !begin.test('I love sushi'))

// t(() => end.test('hi'))
// t(() => !end.test('higher'))
// t(() => !end.test('likelihood'))
// t(() => !end.test('Hi'))
// t(() => end.test('I love sushi'))

t(() => beginEnd.test('hi'))
t(() => !beginEnd.test('hired kimchi'))
t(() => !beginEnd.test('higher'))
t(() => !beginEnd.test('likelihood'))
t(() => !beginEnd.test('Hi'))
t(() => !beginEnd.test('I love sushi'))

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