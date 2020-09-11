const vowelDots = (str) => {
    let reg = /[AEIOUaeiou]/g
    let newstr = ''
    for (let i = 0; i < str.length; i++) {
        newstr+=str[i]
        if (reg.test(str[i])) {
            newstr+='.'
        }
    }
    return newstr
}