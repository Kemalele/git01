const cutFirst = (str) => {
    let res = ''
    for (let i = 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}

const cutLast = (str) => {
    let res = ''
    for (let i = 0; i < str.length - 2; i++) {
        res += str[i]
    }

    return res
}


const cutFirstLast = (str) => {
    let res = ''
    for (let i = 2; i < str.length - 2; i++) {
        res += str[i]
    }

    return res
}

const keepFirst = (str) => {
    let res = ''

    if (str.length <= 2) {
        return str
    }

    for (let i = 0; i < 2; i++) {
        res += str[i]
    }
    return res
}

const keepLast = (str) => {
    let res = ''

    if (str.length <= 2) {
        return str
    }

    for (let i = str.length - 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}

const keepFirstLast = (str) => {
    if (str.length < 4) {
        return str
    }
    let res = keepFirst(str) + keepLast(str)
    return res
}