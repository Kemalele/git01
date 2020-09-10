const split = (str, splitter) => {
    let res = []
    let half = ''
    for (let i = 0; i < str.length; i++) {

        if (str.substr(i,splitter.length) != splitter) {
            half += str[i]
        } else if (half.length != 0) {
            res.push(half)
            half = ''
            i += splitter.length - 1
        }
    }
    res.push(half)
    return res
}

const join = (arr,splitter) => {
    let res = ''

    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
        if (i != arr.length -1 ) {
            res += splitter
        }
    }

    return res
}
