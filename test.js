const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const reverse = (arg) => {
    let res
    if (typeof arg === 'string') {
        res = ''
    } else {
        res = []
    }

    for (let i = arg.length -1 ; i >= 0 ; i--) {
        if (typeof arg === 'string') {
            res += arg[i] 
        } else {
            res.push(arg[i])
        }
     }

     return res

}

console.log(reverse([1, 2, 3]),[3,2,1])
t(({ eq }) => eq(reverse([1, 2, 3]), [3, 2, 1]))
// t(({ eq }) => eq(reverse('pouet'), 'teuop'))
// t(({ eq }) => eq(reverse("salut c'est cool"), "looc tse'c tulas"))

Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    if (!tests[i]({ eq })) {
        console.log(tests[i]({ eq }))
    } else {
        console.log('ok')
    }
}