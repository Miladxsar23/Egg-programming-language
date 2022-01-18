/**
 * evaluate syntax tree object whitch parser generate it 
 */

const {speacialForms} = require("./_specialForms")
function evaluate(expr, scope) {
    if (expr.type === "value")
        return expr.value
    else if (expr.type === "word") {
        if (expr.name in scope)
            return scope[expr.name]
        else
            throw new ReferenceError(`undefined binding : ${expr.name}`)
    }
    else if (expr.type === "apply") {
        let { operator, args } = expr;
        if (operator.type === "word" &&
            operator.name in speacialForms) {
            return speacialForms[operator.name](args, scope);
        }
        else {
            let op = evaluate(operator, scope)
            if (typeof op === "function") {
                op(...args.map(arg => { return evaluate(arg, scope) }))
            } else {
                throw new TypeError("Applying a non-function")
            }
        }
    }
}
module.exports.evaluate = evaluate