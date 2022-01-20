/**
 * parse program
 */

const { parseExpressions } = require("./_parserExpression");
const { skipSpace } = require("./_skipSpace");

function parse(program) {
    const { expr, rest } = parseExpressions(program)
    if (skipSpace(rest).length > 0)
        throw new SyntaxError("unexpected test after program")
    return expr;
}

module.exports = { parse };