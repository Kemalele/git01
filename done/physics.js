const getAcceleration = (obj) => {
    if (obj.hasOwnProperty('f') && obj.hasOwnProperty('m')) {
        return obj.f / obj.m
    }

    if (obj.hasOwnProperty('Δv') && obj.hasOwnProperty('Δt')) {
        return obj.Δv / obj.Δt
    }

    if (obj.hasOwnProperty('d') && obj.hasOwnProperty('t')) {
        return (2 * obj.d) / (obj.t ** 2)
    }

    return 'impossible'
}