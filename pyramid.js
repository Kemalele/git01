const pyramid = (char, num) => {
    let res = ''
    let count = 1
    for (let i = 0; i < num; i++ ) {
        let row = ''
        for (let j = 0; j < num - i - 1; j++) {
            row += ' '.repeat(char.length)
        }
        row += char.repeat(count)
        count += 2

        if (i != num -1) {
            row += '\n'
        }
        res += row
    }

    return res
}
