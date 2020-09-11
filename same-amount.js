const sameAmount = (str, a, b) => {
    if (a.exec(str)  === null || b.exec(str)  === null) {
        return false
    }
    let aCount = 0
    let bCount = 0
    
    a = new RegExp(a,'g')
    b = new RegExp(b,'g')
    while (kek = a.exec(str))aCount++
    while (kek = b.exec(str))bCount++

    if (aCount === bCount) {
        return true
    }
    
    return false
}