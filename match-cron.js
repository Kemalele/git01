const matchCron = (cron, date) => {
    let mustMatch = []
    for (let i = 0; i < cron.length; i++) {
        if (cron[i] != ' ') {
            if (cron[i] != '*') {
                mustMatch.push(Number.parseInt(cron[i]))
            } else {
                mustMatch.push(-1)
            }
        }
    }
    for (let i = 0; i < mustMatch.length; i++) {
        if (mustMatch[i] != -1) {
            if (i === 0 && date.getMinutes() !== mustMatch[i]) {
                return false
            }

            if (i === 1 && date.getHours() !== mustMatch[i]) {
                return false
            }

            if (i === 2 && date.getDate() !== mustMatch[i]) {
                return false
            }

            if (i === 3 && date.getMonth() + 1 !== mustMatch[i]) {
                return false
            }

            if (i === 4 && date.getDay() !== mustMatch[i]) {
                return false
            }
        }
    }

    return true
}