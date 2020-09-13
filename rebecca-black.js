const isFriday = (date) => {
    if (date.getDay() === 5) {
        return true
    }

    return false
}

const isWeekend = (date) => {
    if (date.getDay() === 6 || date.getDay() === 0) {
        return true
    }

    return false
}

const isLeapYear = (date) => {
    if (date.getFullYear() % 4 === 0) {
        return true
    }

    return false
}

const isLastDayOfMonth = (date) => {
    let currMonth = date.getMonth()
    date.setDate(date.getDate() + 1)
    if (date.getMonth() === currMonth) {
        return false
    }

    return true
}