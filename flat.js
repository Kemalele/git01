const flat = (arr, depth = 1) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (depth === 1) {
                newArr = newArr.concat(arr[i])
            } else {
                newArr = newArr.concat(flat(arr[i], depth--))
            }
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr
}