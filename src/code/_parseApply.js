/**
 * parse apply is a function for parsing application expressions
 */

const { parseExpressions } = require("./_parserExpression");
const { skipSpace } = require("./_skipSpace")

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] !== "(")
        return { expr, rest: program }
    program = skipSpace(program.slice(1))
    expr = { type: "apply", oerator: expr, args: [] }
    while (program[0] !== ")") {
        let arg = parseExpressions(program);
        expr.args.push(arg)
        program = skipSpace(arg.rest)
        if (program[0] === ",") {
            program = skipSpace(program.slice(1))
        } else if (program[0] !== ")") {
            throw new SyntaxError("expected ',' or ')'")
        }
    }
    return parseApply(program.slice(1))
}
module.exports.parseApply = parseApply;