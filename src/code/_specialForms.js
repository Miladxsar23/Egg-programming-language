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

