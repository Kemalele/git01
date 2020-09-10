const round = (num) => {
    let isNegative
    let realNumber

    if (num < 0) {
        isNegative = true
        num = -num
    }

    realNumber = num % 1

    if (!isNegative) {
        if (realNumber >= 0.50) {
            num = num - realNumber + 1
        } else {
            num = num - realNumber
        }
    } else {
        if (realNumber >= 0.51) {
            num = num - realNumber + 1
        } else {
            num = num - realNumber
        }
        num = -num
    }

    return num
}

const ceil = (num) => {
    if (Number.isInteger(num)) {
        return num
    }
    let isNegative
    let realNumber

    if (num < 0) {
        isNegative = true
        num = -num
    }

    realNumber = num % 1

    if (!isNegative) {
        if (realNumber != 0) {
            num = num - realNumber + 1
        } else {
            num = num - realNumber
        }
    } else {
        if (realNumber != 0) {
            num = num - realNumber
        } else {
            num = num - realNumber
        }
        num = -num
    }

    return num

}

const floor = (num) => {
    if (Number.isInteger(num)) {
        return num
    }
    let isNegative
    let realNumber

    if (num < 0) {
        isNegative = true
        num = -num
    }

    realNumber = num % 1

    if (!isNegative) {
        num -= realNumber
    } else {
        num = num - realNumber + 1
        num = -num
    }

    return num
}

const trunc = (num) => {
    if (Number.isInteger(num)) {
        return num
    }
    let isNegative
    let realNumber

    if (num < 0) {
        isNegative = true
        num = -num
    }

    realNumber = num % 1

    num -= realNumber
    if (isNegative) {
        num = -num
    }
    return num
}