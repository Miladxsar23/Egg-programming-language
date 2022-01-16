/*
* parser syntax -> generate a javascript object Tree
* expressions -> expression(...args)
*/


// parseExpressions<Recursive function> -> return javascript object {expressionStruct<object>, nextExpression<string>} 
const { skipSpace } = require("./_skipSpace");
const {parseApply} = require("./_parseApply");

function parseExpressions(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = /^"([^"]*)"/.exec(program))
        expr = { type: "value", value: match(1) }
    else if (match = /^\d+\b/.exec(program))
        expr = {type : "value", value : match(0)}
    else if(match = /^[^\s()#"]+/.exec(program)) 
        expr = {type : "word", name : match(0)}
    else
        throw new SyntaxError("unexpected syntax : ", program)
    return parseApply(expr, program.slice(match(0).length))               
}

module.exports.parseExpressions = parseExpressions
