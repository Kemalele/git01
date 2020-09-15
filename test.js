const tests = []
const t = (f) => tests.push(f)

function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

const eq = (a, b) => {
    if (typeof a === 'object') {
        return isEquivalent(a, b)
    }
    if (Array.isArray(a)) {

        if (JSON.stringify(a) === JSON.stringify(b)) {
            return true
        } else {
            return false
        }
    }

    if (a === b) {
        return true
    } else {
        return false
    }
}

let enableTests = true



Object.freeze(tests)
if (enableTests) {

    let failed = false
    let fails = []

    for (let i = 0; i < tests.length; i++) {
        if (!tests[i]({ eq })) {
            failed = true
            fails.push(i)
        }
    }

    if (failed === true) {
        console.log(fails)
    } else {
        console.log("ok")
    }
}