is.num = (arg) => typeof arg === 'number'
is.nan = (arg) => Number.isNaN(arg)
is.str = (arg) => typeof arg === 'string'
is.bool = (arg) => typeof arg === 'boolean'
is.undef = (arg) => typeof arg === 'undefined'
is.def = (arg) => typeof arg !== 'undefined'
is.arr = (arg) => Array.isArray(arg)
is.obj = (arg) => !Array.isArray(arg) && arg !== null && typeof arg === 'object'
is.fun = (arg) => typeof arg === 'function'
is.truthy = (arg) => !!arg
is.falsy = (arg) => !arg