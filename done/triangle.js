const triangle = (char, num) => {
    let res = ''

    for (let i = 0; i < num; i++ ) {
        let row = ''
        for (let j = 0; j <= i; j++) {
            row += char
        }
        if (i != num -1) {
            row += '\n'
        }
        res += row
    }

    return res
}