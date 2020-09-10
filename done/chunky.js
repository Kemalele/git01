const chunk = (arr, num) => {
    let res = [[]]
    let temp = []
    let counter = num
    res.pop()
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i])
        counter--

        if (counter === 0 && temp.length != 0) {
            res.push(temp)
            temp = []
            counter = num
        }
    }

    if (temp.length != 0) {
        res.push(temp)
    }


    return res
}