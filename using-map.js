const citiesOnly = (objArr) => {
    return objArr.map(obj => obj.city)
}

const upperCasingStates = (cities) => {
    return cities.map(city => {
        let cityArr = city.split(' ')
        let uppers = cityArr.map(c => c[0].toUpperCase() + c.substring(1))
        return uppers.join(' ')
    })
}

const fahrenheitToCelsius = (tempArr) => {
    return tempArr.map(temp => {
        let f = Number.parseInt(temp.split('°F'))
        return (Math.floor((f - 32) * 5 / 9)).toString() + '°C'
    })
}

const trimTemp = (arrStates) => {
    return arrStates.map(state => {
        state.temperature = state.temperature.replace(' ', '')
        return state
    })
}

const tempForecasts = (states) => {
    return states.map(state => {
        let res = ''
        let f = Number.parseInt(state.temperature.split('°F'))
        let c = Math.floor((f - 32) * 5 / 9).toString() + '°Celsius'

        let stateArr = state.state.split(' ')
        let upperState = stateArr.map(c => c[0].toUpperCase() + c.substring(1)).join(' ')
        return `${c} in ${state.city}, ${upperState}`
    })
}