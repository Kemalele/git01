is.num = (arg) => typeof(arg) === 'number' ? true : false
is.nan = (arg) => typeof(arg) === 'NaN' ? true : false
is.str = (arg) => typeof(arg) === 'string' ? true : false
is.bool = (arg) => typeof(arg) === 'bool' ? true : false
is.undef = (arg) => typeof(arg) === 'undefined' ? true : false
is.def = (arg) => typeof(arg) === 'defined' ? true : false
is.arr = (arg) => typeof(arg) === 'array' ? true : false
is.obj = (arg) => typeof(arg) === 'object' ? true : false
is.fun = (arg) => typeof(arg) === 'function' ? true : false
is.truthy = (arg) => { if (arg) { return true } return false }
is.falsy = (arg) => { if (!arg) { return false } return false }