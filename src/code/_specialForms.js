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
//////////////////-------function----------////////////////
specialForms.fun = function (args, scope) {
    if (!args.length)
        throw new SyntaxError("Functions need a body");
    let body = args[args.length - 1];
    let params = args.slice(0, args.length - 1).map(expr => {
        if (expr.type !== "word")
            throw new SyntaxError("parameters names must be words")
        return expr.name;
    })
    return function (...arguments) {
        if (arguments.length !== params.length)
            throw new TypeError("wrong number of arguments")
        const localScope = Object.create(scope)
        for (let i = 0; i < arguments.length; i++) {
            localScope[params[i]] = arguments[i]
        }
        return evaluate(body, localScope)
    }
}
///////////////////----------set------------///////////////////////
specialForms.set = (args, scope) => {
    if (args.length != 2 || args[0].type !== "word")
        return new SyntaxError("incorrect use of set")
    let name = args[0].name
    let value = evaluate(args[1], scope)
    for (; ;) {
        if (!scope) {
            throw new ReferenceError(`variable ${args[0].name} not define`)
        }
        if (Object.prototype.hasOwnProperty.call(scope, name)) {
            scope[name] = value
            return value
        }
        scope = Object.getPrototypeOf(scope)
    }
}
module.exports = { specialForms }