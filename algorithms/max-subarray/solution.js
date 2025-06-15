function maxSubArray(arr) {
    if (arr.length === 0) return 0

    let maxSum = arr[0]; // 全局最大子数组和
    let maxCurrent = arr[0]; // 当前最大子数组和
    for (const i of arr.slice(1)) {
        maxCurrent = Math.max(i + maxCurrent, i)
        maxSum = Math.max(maxCurrent, maxSum)
    }


    return maxSum
}


// 测试用例
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 应输出 6
console.log(maxSubArray([1])); // 应输出 1
console.log(maxSubArray([-1, -2, -3])); // 应输出 -1
console.log(maxSubArray([])); // 应输出 0
