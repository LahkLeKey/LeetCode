/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strings: string[]): string {
    if (strings.length === 0) return "";
    
    return strings.reduce((commonPrefix, currentString) => {
        let i = 0;
        while (i < commonPrefix.length && i < currentString.length && commonPrefix[i] === currentString[i]) {
            i++;
        }
        return commonPrefix.substring(0, i);
    }, strings[0]);
};
// @lc code=end

