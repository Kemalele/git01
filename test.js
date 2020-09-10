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




// work with simple key / values
t(() => get({ key: 'value' }, 'key') === 'value')

// work with nested objects
t(() => get({ nested: { key: 'value' } }, 'nested.key') === 'value')

//return undefined without error if the value do not exist
t(() => get({ key: 'value' }, 'nx') === undefined)
t(() => get({ nested: { key: 'value' } }, 'nested.nx') === undefined)
t(() => get({ nested: { key: 'value' } }, 'na.nx') === undefined)

// // work with nested arrays too
t(() => get({ a: [{ b: t }] }, 'a.0.b') === t)
t(() => get({ a: [{ b: t }] }, 'a.0.b.toString') === t.toString)


Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]())
    } else {
        console.log('ok')
    }
}