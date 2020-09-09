const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const repeat = (str, nbr) => nbr === 0 ? '' : nbr === 1 ? str : str += repeat(str, nbr - 1)

t(() => typeof repeat === 'function')
t(() => repeat.length === 2)
t(() => repeat('a', 3) === 'aaa')
t(() => repeat('ba', 10) === 'babababababababababa')
t(() => repeat('pouet', 2) === 'pouetpouet')
t(() => repeat('haha', 1) === 'haha')
t(() => repeat('hehehe', 0) === '')



Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i])
    } else {
        console.log('ok')
    }
}