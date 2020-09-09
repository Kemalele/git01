const multiply = (a, b) => {
    let indexer = a
    let multiplier = b
    let res = 0

    if (a < 0) {
        indexer = b
        multiplier = a
    }

    if (indexer < 0) {
        for (let i = indexer; i < 0; i++) {
            res -= multiplier
        }
    } else {
        for (let i = 0; i < indexer; i++) {
            res += multiplier
        }
    }


    return res
}

const divide = (a, b) => {
    let result = 0
    let isNegative = false

    if (a < 0 && b < 0) {
        a = -a
        b = -b
    } else if (a < 0) {
        a = -a
        isNegative = true
    } else if (b < 0) {
        b = -b
        isNegative = true
    }
    
    for (let i = a; i >= b; i -= b) {
        result++
    }

    if (isNegative) {
        result = -result
    }

    return result
}

const modulo = (a, b) => {
    let res = 0
    let isNegative = false
    if (a < b && a > 0) {
        return a
    }

    if (a < 0) {
        a = -a
        isNegative = true
    }

    if (b < 0) {
        b = -b
    }

    for (let i = a; i >= b; i -= b) {
        res = i
    }
    res = res - b
    if (isNegative) {
        res = -res
    }
    return res
}