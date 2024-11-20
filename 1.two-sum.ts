/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (const [index, num] of nums.entries()) {
        if (map.has(target - num)) {
            return [map.get(target - num), index];
        }
        map.set(num, index);
    }
    return [];
};

