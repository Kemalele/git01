const addWeek = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let earthMadeDate = new Date('0001-01-01')
    let msLeft = date.getTime() - earthMadeDate.getTime()
    let daysLeft = Math.floor(msLeft / (1000 * 3600 * 24))
    let weeksLeft = Math.floor(daysLeft / 7)
    if (weeksLeft % 2 !== 0 && weeksLeft / 2 !== 0) {
        return 'second' + days[date.getDay()]
    }
    return days[date.getDay()]
}

const timeTravel = (dateObj) => {
    dateObj.date.setHours(dateObj.hour, dateObj.minute, dateObj.second)
    return dateObj.date
}