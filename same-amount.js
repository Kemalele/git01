const sameAmount = (str, a, b) => {
    a = a.exec(str)
    b = b.exec(str)
    if (a  === null || b  === null) {
        return false
    }
    
    if (a.length === b.length) {
        return true
    }
    
    return false
}