const ionOut = (str) => {
    let reg = /[\w]+(?<=t)(?=ion)/g
    if (str.match(reg) === null) {
        return []
    }
    return str.match(reg)
}