const dogYears = (planet, seconds) => {
    const secondsInEarthYear = 31557600
    const dogYears = 7
    const planetPeriods = {
        'earth': 1,
        'mercury': 0.2408467,
        'venus': 0.61519726,
        'mars': 1.8808158,
        'jupiter': 11.862615,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132
    }

    let earthSeconds = planetPeriods[planet] * secondsInEarthYear
    let result = seconds / earthSeconds * dogYears
    return parseFloat(result.toFixed(2))
}