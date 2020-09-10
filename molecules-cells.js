const RNA = (str) => {
    let rna = ''

    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            rna += 'C'
        }

        if (str[i] === 'C') {
            rna += 'G'
        }

        if (str[i] === 'T') {
            rna += 'A'
        }

        if (str[i] === 'A') {
            rna += 'U'
        }
        
    }

    return rna
} 

const DNA = (str) => {
    let res = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C') {
            res += 'G'
        }

        if (str[i] === 'G') {
            res += 'C'
        }

        if (str[i] === 'A') {
            res += 'T'
        }

        if (str[i] === 'U') {
            res += 'A'
        }
    }
    
    return res
}