const indexOf = (arr, value, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] == value) {
            return i
        }
    }

    return -1
}