const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
}

const getAcceleration = (obj) => {
    if (obj.hasOwnProperty('f') && obj.hasOwnProperty('m')) {
        return obj.f / obj.m
    }

    if (obj.hasOwnProperty('Δv') && obj.hasOwnProperty('Δt')) {
        return obj.Δv / obj.Δt
    }

    if (obj.hasOwnProperty('d') && obj.hasOwnProperty('t')) {
        return (2 * obj.d) / (obj.t ** 2)
    }

    return 'impossible'
}

t(({ eq }) => eq(getAcceleration({}), 'impossible'))
t(({ eq }) => eq(getAcceleration({ d: 10, f: 2, Δv: 100 }), 'impossible'))
t(({ eq }) => eq(getAcceleration({ f: 10, Δv: 100 }), 'impossible'))
t(({ eq }) => eq(getAcceleration({ f: 10, m: 5 }), 2))
t(({ eq }) => eq(getAcceleration({ f: 10, m: 5, Δv: 100, Δt: 50 }), 2))
t(({ eq }) => eq(getAcceleration({ Δv: 100, Δt: 50 }), 2))
t(({ eq }) => eq(getAcceleration({ f: 10, Δv: 100, Δt: 50 }), 2))
t(({ eq }) => eq(getAcceleration({ f: 10, m: 5, Δt: 100 }), 2))
t(({ eq }) => eq(getAcceleration({ d: 10, t: 2, Δv: 100 }), 5))
t(({ eq }) => eq(getAcceleration({ d: 100, t: 2, f: 100 }), 50))


Object.freeze(tests)

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]({ eq }))
}   