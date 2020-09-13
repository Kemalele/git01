const tests = []
const t = (f) => tests.push(f)
const eq = (a, b) => {
    if (Array.isArray(a)) {
        if (JSON.stringify(a) === JSON.stringify(b)) {
            return true
        } else {
            return false
        }
    }

    if (a === b) {
        return true
    } else {
        return false
    }
}

const timeTravel = (dateObj) => {
    dateObj.date.setHours(dateObj.hour, dateObj.minute, dateObj.second)
    return dateObj.date
}

console.log({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
})

t(({ eq }) =>
    // random time traveling
    eq(
        timeTravel({
            date: new Date('2020-05-29 23:25:22'),
            hour: 21,
            minute: 22,
            second: 22,
        }).getTime(),
        new Date('2020-05-29 21:22:22').getTime(),
    ),
)

t(({ eq }) =>
    eq(
        timeTravel({
            date: new Date('2000-05-09 01:28:02'),
            hour: 21,
            minute: 22,
            second: 22,
        }).getTime(),
        new Date('2000-05-09 21:22:22').getTime(),
    ),
)

t(({ eq }) =>
    eq(
        timeTravel({
            date: new Date('2018-06-04 13:01:00'),
            hour: 10,
            minute: 16,
            second: 11,
        }).getTime(),
        new Date('2018-06-04 10:16:11').getTime(),
    ),
)

t(({ eq }) =>
    eq(
        timeTravel({
            date: new Date('1995-11-07 00:21:12'),
            hour: 23,
            minute: 12,
            second: 18,
        }).getTime(),
        new Date('1995-11-07 23:12:18').getTime(),
    ),
)

t(({ eq }) =>
    eq(
        timeTravel({
            date: new Date('1000-09-19 06:00:00'),
            hour: 22,
            minute: 10,
            second: 21,
        }).getTime(),
        new Date('1000-09-19 22:10:21').getTime(),
    ),
)

t(({ eq }) =>
    eq(
        timeTravel({
            date: new Date('1975-05-10 10:07:56'),
            hour: 17,
            minute: 15,
            second: 14,
        }).getTime(),
        new Date('1975-05-10 17:15:14').getTime(),
    ),
)


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