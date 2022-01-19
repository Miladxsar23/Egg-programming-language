/**
 * special form like GLOBAL function
 */
const { evaluate } = require("./_evaluator")
let specialForms = Object.create(null)
/////////////---if---/////////////////
specialForms.if = function (args, scope) {
    if (args.length != 3)
        throw new SyntaxError("Wrong number of args to if")
    if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope)
    } else {
        return evaluate(args[2], scope)
    }
}
//////////////-----while-----//////////////////
specialForms.while = function (args, scope) {
    if (args.length !== 2)
        throw new SyntaxError("Wrong number of args to while")
    while (evaluate(args[0], scope) !== false) {
        evaluate(args[1], scope)
    }
    return false
}

///////////////------do-----////////////////////
specialForms.do = function (args, scope) {
    let value = false
    for (let arg of args) {
        value = evaluate(arg, scope)
    }
    return value;
}

////////////////----define---///////////////////////
specialForms.define = function (args, scope) {
    if (args.length != 2 || args[0].type !== "word")
        return new SyntaxError("incorrect use of define")
    let value = evaluate(args[1], scope)
    scope[args[0].name] = value
    return value
}

module.exports.specialForms = specialForms