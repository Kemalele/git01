const countLeapYears = (date) => {
    let year = date.getFullYear()
    return Math.floor((year / 4) - (year / 100) + (year / 400))
}