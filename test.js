const tests = []
const t = (f) => tests.push(f)
const get = (key) => sourceObject[key]
const set = (key, value) => { sourceObject[key] = value }

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

set('num', 10)
console.log(get('num'))

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]())
}