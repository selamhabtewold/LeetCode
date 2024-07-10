/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = [];
    let depth = 0;

    const regexDirName = /^[\w\d_]+\/$/;
    const regexDotDotSlash = /^\.\.\//;
    const regexDotSlash = /^\.\//;

    for (let i = 0; i < logs.length; i++) {
        if (regexDirName.test(logs[i])) {
            stack.push(logs[i]);
            depth++;
        } else if (regexDotDotSlash.test(logs[i])) {
            if (depth > 0) {
                stack.pop();
                depth--;
            }
        }
    }

    return depth;
};
