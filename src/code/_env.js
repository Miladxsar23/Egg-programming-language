/**
 * top scope variable as enviroinment variables of our language
 * has a global variable with global value
 */

const topScope = Object.create(null)
// true expression = true<boolean>
topScope.true = true;
// false expression = false<boolean>
topScope.false = false;
// operator expression -> special operations
for (let op of ["*", "+", "-", ">", "<", "==", "/"]) {
    topScope[op] = Function("a, b", `
        return a ${op} b
    `)
}
// print function -> print the arguments
topScope.print = value => {
    console.log(value)
    return value
}
// arrays define
topScope.array = (...args) => {
    return args
}
// array length
topScope.length = (value) => {
    if (value.length)
        return value.length
    else
        return 0;
}
// get array item
topScope.element = (arr, index) => {
    return arr[index]
}
process.env["FILEFORMAT"] = ".egg";
module.exports = { topScope }