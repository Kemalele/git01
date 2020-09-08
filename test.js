const tests = []
const t = (f) => tests.push(f)

const is = {}

is.num = (arg) => typeof(arg) === 'number' ? true : false
is.nan = (arg) => typeof(arg) === 'NaN' ? true : false
is.str = (arg) => typeof(arg) === 'string' ? true : false
is.bool = (arg) => typeof(arg) === 'bool' ? true : false
is.undef = (arg) => typeof(arg) === 'undefined' ? true : false
is.def = (arg) => typeof(arg) === 'defined' ? true : false
is.arr = (arg) => typeof(arg) === 'array' ? true : false
is.obj = (arg) => typeof(arg) === 'object' ? true : false
is.fun = (arg) => typeof(arg) === 'function' ? true : false
is.truthy = (arg) => { if (arg) { return true } return false }
is.falsy = (arg) => { if (!arg) { return false } return false }

const tests = []
const t = (f) => tests.push(f)

export const setup = () => [
    0,
    NaN,
    true,
    '',
    '💩',
    undefined,
    t, [],
    {},
    [1, Array(1), [], 2],
    { length: 10 },
    Object.create(null),
    null,
    console.log,
    void 0,
]
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const ctx = {}
ctx.filter = (fun) => {
    let arr = []
    for (let i = 0; i < setup.length; i++) {
        if (fun(setup[i])) {
            arr.push(setup[i])
        }
    }

    return arr
}

const match = ({ eq, ctx }, fun, values) => eq(ctx.filter(fun), values)

// the array of value here is the ones that your function should
// return true too, while returning false to every others.
t((_) => match(_, is.num, [0, NaN]))
t((_) => match(_, is.nan, [NaN]))
t((_) => match(_, is.str, ['', '💩']))
t((_) => match(_, is.bool, [true]))
t((_) => match(_, is.undef, [undefined, undefined]))
t((_) => match(_, is.arr, [
    [],
    [1, Array(1), [], 2]
]))
t((_) => match(_, is.obj, [{}, { length: 10 }, Object.create(null)]))
t((_) => match(_, is.fun, [t, console.log]))
t((_) => match(_, is.falsy, [0, NaN, '', undefined, null, void 0]))

// is.def
t(({ ctx }) => !ctx.filter(is.def).includes(undefined))
t(({ ctx }) => ctx.filter(is.def).length === ctx.length - 2)

// is.truthy
t((_) =>
    match(_, is.truthy, [
        true,
        '💩',
        t, [],
        {},
        [1, Array(1), [], 2],
        { length: 10 },
        Object.create(null),
        console.log,
    ]),
)

Object.freeze(tests)
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]({ eq, ctx }))
}