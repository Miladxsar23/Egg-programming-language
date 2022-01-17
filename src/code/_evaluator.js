/**
 * evaluate syntax tree object whitch parser generate it 
 */

let speacialForm = Object.create(null)
function evaluate(expr, scope) {
    if(expr.type === "value")
        return expr.value
    else if(expr.type === "word") {
        if(expr.name in scope)
            return scope[expr.name]
        else
            throw new ReferenceError(`undefined binding : ${expr.name}`)    
    }    
}