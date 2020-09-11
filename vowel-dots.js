
const vowels = /[AEIOUaeiou]/g

const vowelDots = (str) => {
    let newstr = ''
    for (let i = 0; i < str.length; i++) {
        newstr+=str[i]
        if (vowels.test(str[i])) {
            newstr+='.'
        }
    }
    return newstr
}