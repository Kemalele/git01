const nasa = (N) => {
    let res = ''

    for (let i = 1; i <= N;i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res += 'NASA'
        } else if (i % 5 === 0) {
            res += 'SA'
        }  else if (i % 3 === 0) {
            res += 'NA'
        } else {
            res += i.toString()
        }

        if (i != N) {
            res += ' '
        }
    }
    
    return res
}