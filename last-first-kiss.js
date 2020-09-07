const first = (arg) => arg[0]
const last = (arg) => arg[arg.length - 1]
const kiss = (arg) => {
    return [last(arg), first(arg)]
}