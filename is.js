is.num = (arg) => typeof arg === 'number'
is.nan = (arg) => typeof arg === 'NaN'
is.str = (arg) => typeof arg === 'string'
is.bool = (arg) => typeof arg === 'bool'
is.undef = (arg) => typeof arg === 'undefined'
is.def = (arg) => typeof arg !== 'undefined'
is.arr = (arg) => typeof arg === 'array'
is.obj = (arg) => typeof arg === 'object'
is.fun = (arg) => typeof arg === 'function'
is.truthy = (arg) => { if (arg) { return true } return false }
is.falsy = (arg) => { if (!arg) { return false } return false }