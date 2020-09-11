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

const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

const sameAmount = (str, a, b) => {
    if (a.exec(str)  === null || b.exec(str)  === null) {
        return false
    }
    let kek

    let aCount = 0
    let bCount = 0
    a = new RegExp(a,'g')
    b = new RegExp(b,'g')
    while (kek = a.exec(str))aCount++
    while (kek = b.exec(str))bCount++

    if (aCount === bCount) {
        return true
    }
    
    return false
}
console.log(sameAmount(data, /q /, /qqqqqqq/))

t(() => !sameAmount(data, /q /, /qqqqqqq/))//
t(() => !sameAmount(data, /j/, / /))//

t(() => sameAmount('hello how are you', /l/, /e/))
t(() => sameAmount('hello how are you', /h/, /e/))
t(() => sameAmount('hello how are you', /he/, /ho/))

t(() => sameAmount(data, /i/, /p/))
t(() => !sameAmount(data, /h/, /w/))
t(() => sameAmount(data, /qqqq /, /qqqqqqq/))
t(() => sameAmount(data, /fs[^q]/, /q /))
t(() => sameAmount(data, /^[qs]/, /^[gq]/))
t(() => sameAmount(data, /j/, /w/))
t(() => sameAmount(data, /fs./, /jn./))

Object.freeze(tests)




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