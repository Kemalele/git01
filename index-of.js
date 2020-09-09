const indexOf = (arr, value, fromIndex = -1) => {
    let first = -1
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
}

const lastIndexOf = (arr, value, fromIndex = arr.length - 1) => {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i
        }
    }

    return last
}