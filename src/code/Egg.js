/**
 * run a program
 */
const { readFile } = require('fs').promises;
const { evaluate } = require("./_evaluator");
const { parse } = require("./_parse");
const { topScope } = require("./_env");
const path = require("path");
async function run(pathname) {
    let program, result;
    try {
        if (path.extname(pathname) !== ".egg") {
            throw new Error("extension of file dont correct")
        }
        program = await readFile(pathname, "utf8")
        result = evaluate(parse(program), Object.create(topScope))
        return result;
    } catch (e) {
        if (e.code === "ENOENT")
            return "file not exist"
        else
            throw e
    }
}

run(process.argv[2]).then(res => console.log(res), failure => console.log(failure))

