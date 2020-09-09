const slice = (arg, startAt = 0, endAt = arg.length) => {
    if (startAt < 0) {
        startAt = arg.length + startAt
    }

    if (endAt < 0) {
        endAt = arg.length + endAt
    }

    let res

    if (Array.isArray(arg)) {
        res = []
    } else {
        res = ''
    }

    for (let i = startAt; i < endAt; i++) {
        if (Array.isArray(arg)) {
            res.push(arg[i])
        } else {
            res += arg[i]
        }
    }

    return res
}