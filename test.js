const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const words = (str) => str.split(" ")
const sentence = (arr) => arr.join(" ")
const yell = (str) => str.toUpperCase()
const whisper = (str) => '*' + str.toLowerCase() + '*'
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()
    // t(({ eq }) => eq(words('a b c'), ['a', 'b', 'c']))
    // t(({ eq }) => eq(words('Hello  world'), ['Hello', '', 'world']))
    // t(({ eq, ctx: r }) => eq(words(`${r} ${r} ${r}`), [r, r, r]))
    // sentence
t(({ eq }) => eq(capitalize('str'), 'Str'))
t(({ eq }) => eq(capitalize('qsdqsdqsd'), 'Qsdqsdqsd'))
t(({ eq }) => eq(capitalize('STR'), 'Str'))
t(({ eq }) => eq(capitalize('zapZAP'), 'Zapzap'))
t(({ eq }) => eq(capitalize('zap ZAP'), 'Zap zap'))

Object.freeze(tests)
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]({ eq }))
}