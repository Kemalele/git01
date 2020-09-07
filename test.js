const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const circular = {}
circular.circular = circular

t(() => circular.constructor === Object)
t(() => circular.circular === circular)
t(() => circular.circular.circular === circular)
t(() => circular.circular.circular.circular === circular)
t(() => circular.circular.circular.circular.circular === circular)

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]())
}