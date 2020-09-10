const reverse = (arg) => {
    let res
    if (typeof arg === 'string') {
        res = ''
    } else {
        res = []
    }

    for (let i = arg.length -1 ; i >= 0 ; i--) {
        if (typeof arg === 'string') {
            res += arg[i] 
        } else {
            res.push(arg[i])
        }
     }

     return res

}