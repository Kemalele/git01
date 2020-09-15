const dayOfTheYear = (date) => {
    if (date.getMonth() === 0 && date.getDate() === 1) {
        return 1
    }

    const yearStart = new Date(date.getFullYear(), 0, 1)
    let msLeft = date.getTime() - yearStart.getTime()
    let daysLeft = Math.floor(msLeft / (1000 * 3600 * 24))
    return daysLeft + 1
}