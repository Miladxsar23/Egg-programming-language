/**
 * remove all space at start
 */

function skipSpace(str) {
    let first = str.search(/\S/);
    if (first === -1)
        return "";
    else
        return str.slice(first)
}

module.exports = { skipSpace }