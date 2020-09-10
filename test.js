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



t(({ eq }) => eq(RNA(''), ''))
t(({ eq }) => eq(RNA('TAGC'), 'AUCG'))
t(({ eq }) => eq(RNA(DNA('AUCG')), 'AUCG'))

t(({ eq }) => eq(DNA(''), ''))
t(({ eq }) => eq(DNA('AUCG'), 'TAGC'))
t(({ eq }) => eq(DNA(RNA('TAGC')), 'TAGC'))

Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]({eq}))
    } else {
        console.log('ok')
    }
}