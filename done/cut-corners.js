const round = (num) => {
    let isNegative = false
    if (num < 0) {
        isNegative = true
        num = -num
    }

    let realNumber = num % 1

    if (realNumber >= 0.5) {
        num = num - realNumber + 1
    } else {
        num = num - realNumber
    }

    if (isNegative) {
        num = -num
    }

    return num
}

const ceil = (num) => {
    if (Number.isInteger(num)) {
        return num
    }
    let realNumber = num % 1

    if (num < 0) {
        return num - realNumber
    }

    num = num - realNumber + 1

    return num
}