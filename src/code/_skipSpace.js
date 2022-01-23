/**
 * remove all space at start
 * remove all comments and line start with "#" as comment
 */

function skipSpace(str) {
    let skip = str.match(/(\s|#.*)*/)
    return str.slice(skip[0].length)
}

module.exports = { skipSpace }