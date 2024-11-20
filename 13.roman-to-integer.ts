/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const mapRomanToString : Record<string, number> = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XC: 90,
        XL: 40,
        L: 50,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    }
    let total = 0;
    for (let index = 0; index < s.length; index++) {
        const forwardLookup  = s.slice(index, index + 2);
        const isSpecialCase = (lookup: string): boolean => {
            return ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].includes(lookup);
        };

        if (isSpecialCase(forwardLookup)) {
            total += mapRomanToString[forwardLookup];
            index++;
        } else {
            total += mapRomanToString[s[index]];
        }
    }
    return total;
};
// @lc code=end

