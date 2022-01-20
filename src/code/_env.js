/**
 * top scope variable as enviroinment variables of our language
 * has a global variable with global value
 */

const topScope = Object.create(null)
topScope.true = true;
topScope.false = false;
for (let op of ["*", "+", "-", ">", "<", "==", "/"]) {
    topScope[op] = Function("a, b", `
        return a ${op} b
    `)
}
topScope.print = value => {
    console.log(value)
    return value
}
process.env["FILEFORMAT"] = ".egg";
module.exports = {topScope}