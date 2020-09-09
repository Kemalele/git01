const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
        if (a === b) {
            return true
        } else {
            return false
        }
    }
    /////////
const cutFirst = (str) => {
    let res = ''
    for (let i = 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}

const cutLast = (str) => {
    let res = ''
    for (let i = 0; i < str.length - 2; i++) {
        res += str[i]
    }

    return res
}


const cutFirstLast = (str) => {
    let res = ''
    for (let i = 2; i < str.length - 2; i++) {
        res += str[i]
    }

    return res
}

const keepFirst = (str) => {
    let res = ''

    if (str.length <= 2) {
        return str
    }

    for (let i = 0; i < 2; i++) {
        res += str[i]
    }
    return res
}

const keepLast = (str) => {
    let res = ''

    if (str.length <= 2) {
        return str
    }

    for (let i = str.length - 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}

const keepFirstLast = (str) => {
    if (str.length < 4) {
        return str
    }
    let res = keepFirst(str) + keepLast(str)
    return res
}



t(() => cutFirst('abcdef') === 'cdef')
t(() => cutFirst('a') === '')

t(() => cutLast('abcdef') === 'abcd')
t(() => cutLast('a') === '')

t(() => cutFirstLast('abcdef') === 'cd')
t(() => cutFirstLast('af') === '')
t(() => cutFirstLast('afd') === '')
t(() => cutFirstLast('yoafdyo') === 'afd')

t(() => keepFirst('abcdef') === 'ab')
t(() => keepFirst('a') === 'a')

t(() => keepLast('abcdef') === 'ef')
t(() => keepLast('a') === 'a')


t(() => keepFirstLast('abcdef') === 'abef')
t(() => keepFirstLast('af') === 'af')
t(() => keepFirstLast('afd') === 'afd')

t(() => keepFirstLast('yoafdyo') === 'yoyo')












/////////
Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]())
    } else {
        console.log('ok')
    }
}