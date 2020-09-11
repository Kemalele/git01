const letterSpaceNumber = (str) => str.match(/[A-Za-z]\s\d(?!\w)/g) === null? [] : str.match(/[A-Za-z]\s\d(?!\w)/g)
