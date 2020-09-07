const tests = []
const t = (f) => tests.push(f)
const get = (key) => sourceObject[String(key)]
const set = (key, value) => sourceObject[String(key)] = value

const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}
const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
}

set('num', 55)
console.log(set('num', 55))

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]())
}