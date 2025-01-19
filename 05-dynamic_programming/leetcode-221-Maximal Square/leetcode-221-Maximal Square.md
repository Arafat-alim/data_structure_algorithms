# [221. Maximal Square](https://leetcode.com/problems/maximal-square/description/)

<div id="companyTagContainer" style="display: flex; flex-direction: row; margin-bottom: 20px; gap: 5px; margin-top: 10px;"><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);" fdprocessedid="gv3l39"><img src="https://logo.clearbit.com/microsoft.com" style="height: 12px; width: 12px; margin-right: 5px;">Microsoft</button><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);" fdprocessedid="bm4pur"><img src="https://logo.clearbit.com/visa.com" style="height: 12px; width: 12px; margin-right: 5px;">Visa</button><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);" fdprocessedid="owt6f8"><img src="https://logo.clearbit.com/amazon.com" style="height: 12px; width: 12px; margin-right: 5px;">Amazon</button><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);" fdprocessedid="f56uum"><img src="https://logo.clearbit.com/google.com" style="height: 12px; width: 12px; margin-right: 5px;">Google</button><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);" fdprocessedid="hinsq7"><img src="https://logo.clearbit.com/ibm.com" style="height: 12px; width: 12px; margin-right: 5px;">IBM</button>Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.

**Example 1:**
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg" style="width: 400px; height: 319px;">

<pre style="display: block;">Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
```

**Example 2:** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg" style="width: 165px; height: 165px;">
<pre style="display: block;">Input: matrix = [["0","1"],["1","0"]]
Output: 1
```

**Example 3:** 

<pre style="display: block;">Input: matrix = [["0"]]
Output: 0
```

**Constraints:** 

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `matrix[i][j]` is `'0'` or `'1'`.
