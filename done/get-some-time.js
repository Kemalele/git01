const formatDate = (input) => {
    let date = input.toISOString()
    return `${date.substring(8,10)}-${date.substring(5,7)}-${date.substring(0,4)}`
}
const firstDayWeek = (week, year) => {
    const millicondsInWeek = 604800000
    let startYear = new Date(year)

    if (week === 1) {
        return formatDate(startYear)
    }

    week -= 1
    startYear.setTime(startYear.getTime() + (week * millicondsInWeek))
    if (startYear.getDay() === 1) {
        return formatDate(startYear)
    }
    if (startYear.getDay() === 0) {
        startYear.setDate(startYear.getDate() + 1)
    } else if (startYear.getDay() > 1) {
        startYear.setDate(startYear.getDate() - (startYear.getDay() - 1))
    }

    return formatDate(startYear)

}