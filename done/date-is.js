const isValid = (arg) => {
    if (arg == 'Invalid Date') {
        return false
    }

    if (Number.isInteger(arg)) {
        if (new Date(arg) === 'Invalid Date') {
            return false
        } else {
            return true
        }
    }

    if (arg instanceof Date) {
        return true
    }

    return false
}

const isAfter = (a, b) => {
    if (!isValid(a) || !isValid(b)) {
        return false
    }

    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a - b > 0) {
            return true
        } else {
            return false
        }
    }

    if (a.getTime() - b.getTime() > 0) {
        return true
    }

    return false
}

const isBefore = (a, b) => {
    if (!isValid(a) || !isValid(b)) {
        return false
    }

    return !isAfter(a, b)
}

const isFuture = (arg) => {
    if (!isValid(arg)) {
        return false
    }

    if (arg.getTime() > Date.now()) {
        return true
    }

    return false
}

const isPast = (arg) => {
    if (!isValid(arg)) {
        return false
    }

    if (arg.getTime() < Date.now()) {
        return true
    }

    return false
}