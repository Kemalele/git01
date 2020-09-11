const get = (src, path) => {
    let pathArr = path.split('.')

    for (let i = 0; i < pathArr.length; i++) {
        src = src[pathArr[i]]
        if (src === undefined) {
            return src
        }
    }
    return src
}