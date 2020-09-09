const indexOf = (arr, value, fromIndex = -1) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }

    return -1
}

const lastIndexOf = (arr, value, fromIndex = arr.length - 1) => {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i
        }
    }

    return -1
}

const includes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true
        }
    }

    return false
}